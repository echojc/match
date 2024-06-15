'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "713e8b23e6df9a98ae7c4ea9c4bcc93c",
"version.json": "1a03dadffd71beff6651c790f04e24bd",
"index.html": "a1d73ec8e2c539ff54cf2356859a4fb8",
"/": "a1d73ec8e2c539ff54cf2356859a4fb8",
"main.dart.js": "74c00beba5b6d5e23e9ec06ed87ce015",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3db5ebb0e1697ea3689bc799cfa2b762",
"assets/AssetManifest.json": "4a8548e0ce91859b41be7c312114b4ae",
"assets/NOTICES": "c832119fe38fd2830eaaca0534057540",
"assets/FontManifest.json": "708eaccb6f873d29cfee2e85bd3e7d04",
"assets/AssetManifest.bin.json": "2769f2a4219a8b03abddcafff62df95b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "1dd54ca42d3c8dd7087c7b258c63a396",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/svg/s2.svg": "f1a0e8be38c3ea3a757af07283ac0180",
"assets/assets/svg/s3.svg": "1946697f1e95522f6c979c1fcb78985f",
"assets/assets/svg/s1.svg": "d06e7813b1134a9e23057d0076263f99",
"assets/assets/svg/p8.svg": "517ae8e12e5bb20aa999ebc3e6a74461",
"assets/assets/svg/s4.svg": "e6909f14d629507ad458c31aa80a87b2",
"assets/assets/svg/s5.svg": "0203a278348651611487c8d9b4db5d7f",
"assets/assets/svg/p9.svg": "843b3905281d6f767383da42d7d38155",
"assets/assets/svg/hk.svg": "9ce2b0beb18b327614b3aee4eb279215",
"assets/assets/svg/s7.svg": "ab5aebafd535dfeb7369d5a6f983ffa6",
"assets/assets/svg/s6.svg": "5a66ad3cbc5b803b54d5b29713190214",
"assets/assets/svg/m7.svg": "9b1ee7a070b02d96b2bc959ae95968b5",
"assets/assets/svg/m6.svg": "b28849cc0bc4a8e04e9f8562e9847456",
"assets/assets/svg/m4.svg": "34ce9f6bb2c4cf76c59b1871046e9f15",
"assets/assets/svg/ch.svg": "167bf577883bfd95d2e3e6dedaf05bd9",
"assets/assets/svg/m5.svg": "4be1e2811e62f882c63bbd72df037bbf",
"assets/assets/svg/no.svg": "786514e83043180c9602ef75a43a9986",
"assets/assets/svg/m1.svg": "f54b41191b1f4285fd7900314ac27a04",
"assets/assets/svg/m2.svg": "bd9aeb00c37925a62d7187b8de4b79c0",
"assets/assets/svg/m3.svg": "98b7a13986c381816d8068d5ca8f98ef",
"assets/assets/svg/we.svg": "5cc460fb370c40cc2738baee5b6d6de2",
"assets/assets/svg/m8.svg": "d514cb30d437ef534c3bf8e6f9745939",
"assets/assets/svg/m9.svg": "64f458d3345e757af13cee9a48053ea0",
"assets/assets/svg/p7.svg": "1d74d5b720b6ec3790cd9cbac3b1bd0d",
"assets/assets/svg/p6.svg": "50b29ce1d3e3b30adc73828ec6c7cfc2",
"assets/assets/svg/ea.svg": "b00efa9c7f7c90a3b9a94797e55f2f51",
"assets/assets/svg/p4.svg": "defae1694423879ecab682eb09f385cb",
"assets/assets/svg/s8.svg": "a9a7f728faf76d480f9584904cb19ebb",
"assets/assets/svg/s9.svg": "7390a5473f4003335b63d57560d614b9",
"assets/assets/svg/so.svg": "6d48be572480d45ef657e4675782eb46",
"assets/assets/svg/p5.svg": "93859180d85d57662b0dbffec789446e",
"assets/assets/svg/p1.svg": "824885a97744c80ee05b22021ed81213",
"assets/assets/svg/p2.svg": "95677f5f7ad48ebe777de40f3d9b9222",
"assets/assets/svg/p3.svg": "722204c8c5f0381d1a377922b27eb1d4",
"assets/assets/svg/ht.svg": "f51d16ac3101b8c20063de382907a7e0",
"assets/assets/font/ZCOOLQingKeHuangYou-Regular.ttf": "364ffcbe07b3c2cf42b234c821967d11",
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
