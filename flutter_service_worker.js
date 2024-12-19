'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b7516fa0b5c15d31e4d23531e92ff654",
"assets/AssetManifest.bin.json": "7321a34b47a372b42b4199173992dfb3",
"assets/AssetManifest.json": "cd0c54b35dbafab55bc5395e456d1b1d",
"assets/assets/fonts/NotoColorEmoji-Regular.ttf": "aca215e01cbbe3a587de8555269b9233",
"assets/assets/icons/404.svg": "9db21ea7c8fe15417d7e74ba0ed5bbbb",
"assets/assets/icons/admin.svg": "7dd324a8c2766dd598a2c283491ecf26",
"assets/assets/icons/balance.svg": "e014918e1e693cda51c24a5c712d93ae",
"assets/assets/icons/dashboard.svg": "470661be77acf1b33f4e5593c886476f",
"assets/assets/icons/detail.svg": "28fd1928759adb471ddaa943b6697362",
"assets/assets/icons/fa.svg": "faeca7c1ed34f8a213159f18d7260fc6",
"assets/assets/icons/hellocash.svg": "9db45ba29b762156f5deab15c3380f4b",
"assets/assets/icons/hellopay.svg": "823dabe7f1471e8b180fbc85a5c28723",
"assets/assets/icons/history.svg": "413ab2883ee0393e59d4b3c8565d3af2",
"assets/assets/icons/image-gallery.svg": "c6d6abf172f1e9e8828d8a170d701d2e",
"assets/assets/icons/institution.svg": "fe7f59f684d471d62bc9e1b4d33eced8",
"assets/assets/icons/mamapays.svg": "9d55bdaecc635cf68323bbb4cad00ef7",
"assets/assets/icons/no-image.svg": "dffa430f62ad3bc6b47d77995f6cbdb4",
"assets/assets/icons/onecash.svg": "a46e91d6a0c4116bfc55bba4e278f4af",
"assets/assets/icons/people.svg": "3b8f9fde8c62810ed4ff83d0cff5fb3a",
"assets/assets/icons/platform.svg": "7061dffe743b2f8ca3da1c66f16cbd11",
"assets/assets/icons/platforms.svg": "1c5fe329f309f37959fda90097f66146",
"assets/assets/icons/platform_1.svg": "b41e495cba7aa73fb7af77c8edb3dc5b",
"assets/assets/icons/qr_code.svg": "b3de307044e980f6779bd1d946a7bfd3",
"assets/assets/icons/qr_scan.svg": "5e6eeb1496b04553a5b09d7be3cb6cda",
"assets/assets/icons/user.svg": "50b0fe53d7f794f7bd7e047a1bf8ff7c",
"assets/assets/icons/wallet.svg": "87b97d70b78e50c08b3676a8896598ce",
"assets/assets/images/app_logo.svg": "6b161eef8a0a1cbc0c4858b78236d2bb",
"assets/assets/images/br.png": "3e0527fcedd2dc91689ad2bab06a6094",
"assets/assets/images/hellocash.png": "73fac46d71d2ad54db2f492e4ab11194",
"assets/assets/images/hellopay.webp": "759751e25e5ed8618aa7135cb98b9350",
"assets/assets/images/icon.png": "b998c990379c90802f6cdd42e62a1b53",
"assets/assets/images/logo.png": "82d297748f72f8806dff62862a108c36",
"assets/assets/images/logo.svg": "add16413be44f4367d5fde0e29d99aa3",
"assets/assets/images/mamapays.png": "0a788d043a4fa356ed4a843ee3dbe9c2",
"assets/assets/images/mamapays.webp": "14acaa6132d36b82c544a8f23be4ccbc",
"assets/assets/images/onecash.png": "f148186cbeb89dbec7735b4bcbbbef28",
"assets/FontManifest.json": "4e6b237f190f1907b9b2f08deccc782d",
"assets/fonts/MaterialIcons-Regular.otf": "0082c17425780ef0dce06994cb39f940",
"assets/NOTICES": "e09209a825f018ed8aa5c3a7675a81b0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "eedaabff9601560816d7cf05906d857c",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "5530dc96a013849f2739b2393d1b8102",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2d9611f76601f72629d5215c20da29ef",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "66f651b9f6515aad0c54ea95b7147f38",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "638781fea37f0832a55cedb1718999f2",
"icons/Icon-192.png": "e67c680e2bc5bb8b1986250839756b34",
"icons/Icon-512.png": "884dfa7afa17436badaac9030355407d",
"icons/Icon-maskable-192.png": "e67c680e2bc5bb8b1986250839756b34",
"icons/Icon-maskable-512.png": "884dfa7afa17436badaac9030355407d",
"index.html": "5fea854b350dd497c9ee0d32b3eb3458",
"/": "5fea854b350dd497c9ee0d32b3eb3458",
"main.dart.js": "dd2621945b29745158dad1f82f7ca0a6",
"manifest.json": "520b28a47f94ae490f9a36d1078ee9ae",
"splash/img/dark-1x.png": "9cf2a83ac6ccf9892d0e818e03e1d5eb",
"splash/img/dark-2x.png": "41a7695464a6bdb68229c3f7ebf858f8",
"splash/img/dark-3x.png": "486d37f7f67ec6c7db513fa8454985a6",
"splash/img/dark-4x.png": "57bf73a05bdaa9701ce044d0f1eab4ff",
"splash/img/light-1x.png": "9cf2a83ac6ccf9892d0e818e03e1d5eb",
"splash/img/light-2x.png": "41a7695464a6bdb68229c3f7ebf858f8",
"splash/img/light-3x.png": "486d37f7f67ec6c7db513fa8454985a6",
"splash/img/light-4x.png": "57bf73a05bdaa9701ce044d0f1eab4ff",
"version.json": "a9885bf3d7266fbca783d3194e180512"};
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
