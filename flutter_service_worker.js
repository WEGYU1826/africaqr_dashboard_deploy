'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5788894fa52fb2c788c9848b591e7622",
"assets/AssetManifest.bin.json": "1abd7dbb0bdcb322dd38a27eff14be45",
"assets/AssetManifest.json": "5cfadecbdf82ea88d5ec1bc9e0c15efa",
"assets/assets/fonts/Lato/Lato-Black.ttf": "d83ab24f5cf2be8b7a9873dd64f6060a",
"assets/assets/fonts/Lato/Lato-BoldItalic.ttf": "acc03ac1e9162f0388c005177d55d762",
"assets/assets/fonts/Lato/Lato-Light.ttf": "2bcc211c05fc425a57b2767a4cdcf174",
"assets/assets/fonts/Lato/Lato-Regular.ttf": "122dd68d69fe9587e062d20d9ff5de2a",
"assets/assets/fonts/Lato/Lato-Thin.ttf": "7ab0bc06eecc1b75f8708aba3d3b044a",
"assets/assets/fonts/NotoSansEthiopic/NotoSansEthiopic-Black.ttf": "c3be51ba61c5c513480579312f8185b9",
"assets/assets/fonts/NotoSansEthiopic/NotoSansEthiopic-Bold.ttf": "5d93d5284b27bb76db6210f8dc2f5867",
"assets/assets/fonts/NotoSansEthiopic/NotoSansEthiopic-Light.ttf": "14e6f1dcc96e8e74270de2512edff286",
"assets/assets/fonts/NotoSansEthiopic/NotoSansEthiopic-Regular.ttf": "b6d2fc04477566cc16047e2e3b65f6ff",
"assets/assets/fonts/NotoSansEthiopic/NotoSansEthiopic-Thin.ttf": "01e04c0f3626cc27053a76157da83660",
"assets/assets/fonts/Noto_Color_Emoji/NotoColorEmoji-Regular.ttf": "aca215e01cbbe3a587de8555269b9233",
"assets/assets/fonts/Poppins/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/Poppins/Poppins-BlackItalic.ttf": "e9c5c588e39d0765d30bcd6594734102",
"assets/assets/fonts/Poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins/Poppins-BoldItalic.ttf": "19406f767addf00d2ea82cdc9ab104ce",
"assets/assets/fonts/Poppins/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/Poppins/Poppins-ExtraBoldItalic.ttf": "8afe4dc13b83b66fec0ea671419954cc",
"assets/assets/fonts/Poppins/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/assets/fonts/Poppins/Poppins-ExtraLightItalic.ttf": "a9bed017984a258097841902b696a7a6",
"assets/assets/fonts/Poppins/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/assets/fonts/Poppins/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins/Poppins-LightItalic.ttf": "0613c488cf7911af70db821bdd05dfc4",
"assets/assets/fonts/Poppins/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins/Poppins-MediumItalic.ttf": "cf5ba39d9ac24652e25df8c291121506",
"assets/assets/fonts/Poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/Poppins/Poppins-SemiBoldItalic.ttf": "9841f3d906521f7479a5ba70612aa8c8",
"assets/assets/fonts/Poppins/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/assets/fonts/Poppins/Poppins-ThinItalic.ttf": "01555d25092b213d2ea3a982123722c9",
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
"assets/assets/images/no-image-available.png": "0e4a663eae8cbe389514e3fde18bf4da",
"assets/assets/images/onecash.png": "f148186cbeb89dbec7735b4bcbbbef28",
"assets/FontManifest.json": "d9c514dba7631ff62cc4b2166d3b1fb2",
"assets/fonts/MaterialIcons-Regular.otf": "de2a26302f0c772f3a874277c6d26a26",
"assets/NOTICES": "5c4862d183861d3c8a45f77e5d60630c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9e12fe9b227516156325b986c95e4233",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "dddc5c70148f56609c3fb6b29929388e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "95ecc7ee28a42b3caf92d1d116f5195a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"favicon.png": "66f651b9f6515aad0c54ea95b7147f38",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "0c870a2586f7af4cbd349105a9781c6a",
"icons/Icon-192.png": "e67c680e2bc5bb8b1986250839756b34",
"icons/Icon-512.png": "884dfa7afa17436badaac9030355407d",
"icons/Icon-maskable-192.png": "e67c680e2bc5bb8b1986250839756b34",
"icons/Icon-maskable-512.png": "884dfa7afa17436badaac9030355407d",
"index.html": "b9384cebc624ab3e8f3c2db09e87f8e0",
"/": "b9384cebc624ab3e8f3c2db09e87f8e0",
"main.dart.js": "60b1bc6ada8906596eafe78df7d2b289",
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
