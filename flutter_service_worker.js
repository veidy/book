'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "a67437aca23812c1df9292a83d70b0b1",
"/main.dart.js": "5a01aa4977e57581a1f4968cf5870092",
"/assets/LICENSE": "0cb97afc4b7ac4837e4ee1bec80fb263",
"/assets/AssetManifest.json": "1a2b8abed2e57c45def670133521cd15",
"/assets/FontManifest.json": "f7161631e25fbd47f3180eae84053a51",
"/assets/icons/default_avatar.png": "508a1915a2cc729320bb499bb15330ca",
"/assets/icons/bookshelf_icon.png": "b39504cb351f8c7609e107a99f245f01",
"/assets/icons/start_page_wenzi.png": "515a0bbd94d66216995405a2519f3d3b",
"/assets/icons/positive_sequence.png": "31a0ebbde9b7ef81e161345c575c6cbb",
"/assets/icons/enter_the_next_step.png": "369458137198e0a4028018ebb6db2aff",
"/assets/icons/text_directory.png": "597fe6a712eadf4861e00b0f85fc5a90",
"/assets/icons/body_night.png": "e07616ecea4622298a3cdae747d00a71",
"/assets/icons/body_day.png": "47f000cca73f25610d636e46986d9550",
"/assets/icons/book_background.png": "f383c9bd8eb77c9f9e029272f8704f8a",
"/assets/icons/personal_letter_icon.png": "65c956d1c43f8220449e28f17954e5e0",
"/assets/icons/reader_battery.png": "b7f87b5bb8e0755440a12fd22ca98429",
"/assets/icons/nav_back.png": "ce12f0e2c8683e5dd8ea77a69faeec82",
"/assets/icons/start_page_bg.png": "523bc77857219d0115ace4746eba2d42",
"/assets/icons/read_bg.png": "63210f780c1b6f1be5f88a8cb9f8bd10",
"/assets/icons/about_us.png": "3468bd5de53f522ed65e97a7d38b54d2",
"/assets/icons/add_books_icon.png": "5eae44e3fef26878eb360814f57a7d7e",
"/assets/icons/nav_back_white.png": "b617a32707204064b86e186db9754653",
"/assets/icons/bookshelf_icon_hover.png": "72c37333f956f27dae3161fc5da35b77",
"/assets/icons/personal_letter_icon_hover.png": "96e9dd0a172fbe74ed3b8f109aed6a11",
"/assets/icons/startup_page.png": "7cc7067fea7f8f464c223b674a1f6bfa",
"/assets/icons/logo.png": "fdfb25b3aefa41161664bbb113631c62",
"/assets/icons/book_city_icon.png": "06267a19506052cffb4b49e7ed855ca7",
"/assets/icons/cover_default_map.png": "6e127759cf6f9411bcc6329c714572b0",
"/assets/icons/feedback_icon.png": "764f49a4b1a438aa0d2cb790435b25c0",
"/assets/icons/book_city_icon_hover.png": "1f36fd8a7e4214708c573d6acfec743e",
"/assets/icons/change_batch.png": "883ba9637ad410b5f6a15e650e16e26b",
"/assets/icons/start_page_logo.png": "20114eb91f6a06f51ae8743b19840646",
"/assets/icons/reading_record.png": "895201e72942173283c9ddcde50a96e6",
"/assets/icons/body_settings.png": "f2b9d36b49b79c596768231e57d993df",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
