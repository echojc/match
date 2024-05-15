(function(){
  const tileSet = [
    '1', '2', '3', '4', '5',
    '6', '7', '8', '9', '0',
  ];

  const tiles = tileSet.flatMap((t, i) => ([
    { id: `${i}a`, text: t, col: 1, row: 1 },
    { id: `${i}b`, text: t, col: 1, row: 1 },
  ]));

  const COLS = 5;
  const ROWS = 4;

  requestAnimationFrame(() => {
    shuffleTiles(COLS, ROWS, tiles);
    renderTiles(tiles);

    requestAnimationFrame(() => {
      cascadeMatch(tiles);
    });
  });

  document.getElementById('root').onclick = () => {
    setSelectedTile(null);
  };

  // ----

  let selectedTile;
  function setSelectedTile(t) {
    selectedTile = t;

    // remove previous
    clearHighlights();
    Array.from(document.getElementsByClassName('selected')).forEach(el => el.classList.remove('selected'));

    if (t != null) {
      document.getElementById(t.id).classList.add('selected');
    }
  }

  function tileOnClick(ts, t) {
    if (selectedTile === t) {
      setSelectedTile(null);
    } else {
      setSelectedTile(t);
      highlightMoves(ts, t);
    }
  }

  function clearHighlights() {
    Array.from(document.getElementsByClassName('hl')).forEach(hl => getPlayArea().removeChild(hl));
  }

  function highlightMoves(ts, t) {
    const [indexable, cols, rows] = createIndexable(ts);

    // calculate horizontal span
    let l = t.col;
    while (l > 0 && indexable[t.row*cols+(l-1)] != null) l--;
    let r = t.col;
    while (r < (cols-1) && indexable[t.row*cols+(r+1)] != null) r++;
    const hSpan = indexable.slice(t.row*cols+l, t.row*cols+r+1);

    // calculate vertical span
    let u = t.row;
    while (u > 0 && indexable[(u-1)*cols+t.col] != null) u--;
    let d = t.row;
    while (d < (rows-1) && indexable[(d+1)*cols+t.col] != null) d++;
    const vSpan = indexable.filter((_, i) => i%cols === t.col && Math.floor(i/cols) >= u && Math.floor(i/cols) <= d);

    console.log('lr', l, r, 'ud', u, d);

    // count horizontal blank spaces
    let lb = l;
    while (lb > 0 && indexable[t.row*cols+(lb-1)] == null) lb--;
    let rb = r;
    while (rb < (cols-1) && indexable[t.row*cols+(rb+1)] == null) rb++;

    // calculate vertical blank spaces
    let ub = u;
    while (ub > 0 && indexable[(ub-1)*cols+t.col] == null) ub--;
    let db = d;
    while (db < (rows-1) && indexable[(db+1)*cols+t.col] == null) db++;

    console.log('lrb', lb, rb, 'udb', ub, db);

    console.log(t, hSpan, vSpan);

    // render destinations
    for (let x = lb-l; x <= rb-r; x++) {
      if (x === 0) continue;
      renderHighlight(t.col+x, t.row, hSpan)
    }
    for (let y = ub-u; y <= db-d; y++) {
      if (y === 0) continue;
      renderHighlight(t.col, t.row+y, vSpan);
    }
  }

  function getColsRows(ts) {
    let cols = 0, rows = 0;
    for (const t of ts) {
      if (t.row >= rows) rows = t.row+1;
      if (t.col >= cols) cols = t.col+1;
    }
    return [cols, rows];
  }

  function createIndexable(ts) {
    // make tiles indexable by position
    const [cols, rows] = getColsRows(ts);
    const indexable = Array(rows*cols).fill();
    for (const t of ts) {
      indexable[t.row*cols+t.col] = t;
    }
    return [indexable, cols, rows];
  }

  function cascadeMatch(ts, cb) {
    const [indexable, cols, rows] = createIndexable(ts);

    for (const t of indexable) {
      if (t == null) continue;

      // find tile right of
      let right;
      for (let r = t.col+1; r < cols; r++) {
        if ((right = indexable[t.row*cols+r]) != null) break;
      }
      if (right && (right.text === t.text)) {
        removeTiles(ts, [t, right], cascadeMatch);
        return;
      }

      // find tile down of
      let down;
      for (let d = t.row+1; d < rows; d++) {
        if ((down = indexable[d*cols+t.col]) != null) break;
      }
      if (down && (down.text === t.text)) {
        removeTiles(ts, [t, down], cascadeMatch);
        return;
      }
    }

    renderTiles(ts);
  }

  function removeTiles(ts, tiles, cb) {
    tiles.forEach(t => {
      document.getElementById(t.id).classList.add('removing');
    });
    setTimeout(() => {
      tiles.forEach(t => ts.splice(ts.indexOf(t), 1));
      cb(ts);
    }, 600);
  }

  function shuffleTiles(cols, rows, tiles) {
    shuffle(tiles);
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const idx = y*cols+x;
        if (idx >= tiles.length) return;

        tiles[idx].col = x;
        tiles[idx].row = y;
      }
    }
  }

  function getPlayArea() {
    return document.getElementById('playarea') ?? (() => {
      const el = document.createElement('div');
      el.id = 'playarea';
      document.getElementById('root').appendChild(el);
      return el;
    })();
  }

  function renderHighlight(col, row, span) {
    const el = document.createElement('div');
    el.className = 'hl';
    el.style.gridColumn = col+1;
    el.style.gridRow = row+1;
    el.onclick = (e) => {
      if (selectedTile != null) {
        const dx = col - selectedTile.col;
        const dy = row - selectedTile.row;

        if (dy === 0) { // horizontal
          span.forEach(t => t.col += dx);
        } else { // vertical
          span.forEach(t => t.row += dy);
        }

        setSelectedTile(null);

        requestAnimationFrame(() => {
          renderTiles(tiles);
          requestAnimationFrame(() => {
            cascadeMatch(tiles);
          });
        });
      }
      e.stopPropagation();
    };
    getPlayArea().appendChild(el);
  }

  function renderTiles(ts) {
    const createPlaceholder = (col, row) => {
      const el = document.createElement('div');
      el.className = 'tile placeholder';
      el.style.gridColumn = col;
      el.style.gridRow = row;
      return el;
    };
    const placeholders = [
      ...Array(COLS).fill().map((_, i) => createPlaceholder(i+1, 1)),
      ...Array(ROWS).fill().map((_, i) => createPlaceholder(1, i+1)),
    ];

    const els = ts.map(t => {
      const el = document.getElementById(t.id) ?? (()=>{
        const el = document.createElement('div');
        el.id = t.id;
        el.className = 'tile';
        el.onclick = (e) => {
          tileOnClick(ts, t);
          e.stopPropagation();
        };
        return el;
      })();
      el.style.gridColumn = t.col+1;
      el.style.gridRow = t.row+1;
      el.innerText = t.text;
      return el;
    });

    getPlayArea().replaceChildren(...placeholders, ...els);
  }

  function renderTile(t) {
    const el = document.getElementById(t.id) ?? (()=>{
      const el = document.createElement('div');
      el.id = t.id;
      el.className = 'tile';
      getPlayArea().appendChild(el);
      return el;
    })();
    el.style.gridColumn = t.col+1;
    el.style.gridRow = t.row+1;
    el.innerText = t.text;
  }

  // https://stackoverflow.com/a/2450976
  function shuffle(array) {
    let currentIndex = array.length;
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      const tmp = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = tmp;
    }
  }

})();
