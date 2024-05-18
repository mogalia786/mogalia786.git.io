'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e7e4643c9d4ba745f8f3f17e521af05d",
"assets/AssetManifest.bin.json": "2036c0be37ae8b41bffe0cf4df7c86b6",
"assets/AssetManifest.json": "3fa911b1eec7c6c1ddad71ba1496b107",
"assets/assets/image/current.png": "1726483ba8a1e0309c537de27e892ff2",
"assets/assets/image/delivery%2520boy.png": "b033eeffeb8d9cd90e01ec2a06c0e08b",
"assets/assets/image/flutterwave.png": "842a7a8593fca4c2068baec041106bc6",
"assets/assets/image/Lock.png": "b56bccab851eb1d0c7f5e8a53261b8f8",
"assets/assets/image/login-icon.png": "c6bf9107b371a8c7bcfa28942a9d7807",
"assets/assets/image/logo.jpeg": "58983647e08a00f004923b00e74ac861",
"assets/assets/image/new%2520logo.png": "eee5a6c8d5b446ed3dcc54025e33139c",
"assets/assets/image/new%2520new%2520logo.png": "fe589dce3455003e63c7dc5abf14b8ac",
"assets/assets/image/paystack.png": "cbe68c5f53710cac75cdd7021ca297cb",
"assets/assets/image/portugal.png": "1cfb8047020d247309524fc35cb4ce24",
"assets/assets/image/razorpay.png": "fcfab23729c571d2abe2e88854bb363d",
"assets/assets/image/settings.png": "53f729ec2808acc41c977bf53f90fbb1",
"assets/assets/image/spanish.gif": "7bc516329a434727d521f7e8ffb7874d",
"assets/assets/image/splash-screen.png": "c0f558e66a0b90e744b879090d06af51",
"assets/assets/image/splash.jpeg": "ddc6bfbff4f6dbef6dd8d5c587c0e946",
"assets/assets/image/splash.png": "893780187b45c63d9615844b57ec8e48",
"assets/assets/image/stripe.png": "5d112c66b442ea22ed696c4bf01d1558",
"assets/assets/image/usa.png": "32cca9f1dfd4b129c83c744a533d4df6",
"assets/assets/languagesFile/en-US.json": "2de4279906530e4f92b043cf1cd14920",
"assets/assets/languagesFile/es-ES.json": "7e3c880702e17b9efa963cd7086d9cd4",
"assets/assets/languagesFile/pt-PT.json": "33a3910e0388008b66923a611e26d828",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e5a3730ef43f906e857a29a29df930b8",
"assets/NOTICES": "35c6ff72f7f97f83bdbd1a848d87a77d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon-16x16.png": "e1c14c1c2c7ae424492795cad65e7499",
"favicon-32x32.png": "8224f3227386c099e7ec3dbb33d6e1f5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/android-chrome-192x192.png": "1b6713474f0f600d506202937665ac29",
"icons/android-chrome-512x512.png": "c5aa89cedb3f8be0f2211f4c0d9cf10b",
"icons/apple-touch-icon.png": "76c20c3c7a8a99ba7a7d9ca61b906cae",
"icons/favicon-16x16.png": "f05fb2e4426ab0872d873166b98b798b",
"icons/favicon-32x32.png": "8224f3227386c099e7ec3dbb33d6e1f5",
"icons/favicon.ico": "e5df2257cc558f8ad2dad537682f76fe",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/site.webmanifest": "053100cb84a50d2ae7f5492f7dd7f25e",
"index.html": "841e0f2483618298d2fb00bdcc7f5eed",
"/": "841e0f2483618298d2fb00bdcc7f5eed",
"main.dart.js": "5c713b49ac7b5c372b23e129888d0683",
"manifest.json": "28c4123b10e1b5186e1e0e7ce04c95c6",
"version.json": "340bfe1155331368f180302633aa93bb"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
