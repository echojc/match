'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "8ffefc20edd39b20c975d96ebd7aa108",
"version.json": "1a03dadffd71beff6651c790f04e24bd",
"index.html": "a1d73ec8e2c539ff54cf2356859a4fb8",
"/": "a1d73ec8e2c539ff54cf2356859a4fb8",
"main.dart.js": "661118dce2f877ef1e1698b8ce6fb4a2",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3db5ebb0e1697ea3689bc799cfa2b762",
"assets/AssetManifest.json": "0adf1096c92aa2c773e34e738b65272f",
"assets/NOTICES": "c832119fe38fd2830eaaca0534057540",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "7f0ab01e3f360f3639e2056bdcb8672c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ba96f003c962a32d05fad20b758dcd5e",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/svg/s2.svg": "cf77aa32188440fe1c13600ba746a2b1",
"assets/assets/svg/s3.svg": "0a0558bd271bdd36179def5c1924628e",
"assets/assets/svg/s1.svg": "0ec8d659da9604a359793b9ca60060c8",
"assets/assets/svg/p8.svg": "6e1d8bcf1ebf97fb133a545133282e10",
"assets/assets/svg/s4.svg": "ac7101301960352e77d4167b3f746902",
"assets/assets/svg/s5.svg": "e8f5fd0238b5fa6a066f5d5cdb9077c5",
"assets/assets/svg/p9.svg": "a2b973fe35a6df408df70574fc9f56df",
"assets/assets/svg/s7.svg": "10afa65bd6c7e6b82a4ee70ae1bd1f23",
"assets/assets/svg/s6.svg": "6bcaefaf5804b872ce26d3492aa3204a",
"assets/assets/svg/m7.svg": "aaefd453db251b840876b29d8d960c76",
"assets/assets/svg/m6.svg": "7dfdd45c809c72a6dd70978d93039342",
"assets/assets/svg/m4.svg": "2aa01e4389829009df45f5c978ad6c76",
"assets/assets/svg/ch.svg": "6c59826a0349cd4df22c974aa331e59e",
"assets/assets/svg/m5.svg": "e392157c1184951922172cd0e7d7bb14",
"assets/assets/svg/no.svg": "837b1fd3dca0194f573bdbb9bc330def",
"assets/assets/svg/m1.svg": "496f224c9bfe50754c17c85b31fba146",
"assets/assets/svg/m2.svg": "231c264738efc47130c082c12cbc622f",
"assets/assets/svg/m3.svg": "282b3e5b1e038c9132ea289d003f497c",
"assets/assets/svg/we.svg": "36b3befa4230e30656ca2dbc7d1c8bcb",
"assets/assets/svg/m8.svg": "0d1890b6b30536f18bba9458da630603",
"assets/assets/svg/m9.svg": "ea8b81996d13919913246a59498d8814",
"assets/assets/svg/p7.svg": "fda07308f42df6736f8b9ec91b183529",
"assets/assets/svg/p6.svg": "2162c7cf1680aac5229842ce2aaf26e9",
"assets/assets/svg/ea.svg": "802479f3b9a86e102e71fd00f4dd3afa",
"assets/assets/svg/p4.svg": "3505644e00b6d77d87a12c08189ab115",
"assets/assets/svg/s8.svg": "19fbdb3ca5c651690631563ab9a7f942",
"assets/assets/svg/s9.svg": "1d79cc33d3871b7775e385d4b836ec89",
"assets/assets/svg/so.svg": "b74ca1049483ba10eb4c912625937cbd",
"assets/assets/svg/p5.svg": "31cd1ef7956f6013800cc27960149913",
"assets/assets/svg/p1.svg": "93f65d63473d43f79b7145b27016133d",
"assets/assets/svg/p2.svg": "dd319c7093b159c54b61ffe94679e553",
"assets/assets/svg/p3.svg": "1b071d61ab5e426cfd37527997b29f20",
"assets/assets/svg/ht.svg": "8999f830eca6db95cd1ea47d6ab35ed5",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
