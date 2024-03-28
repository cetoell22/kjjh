// index.js
addEventListener("fetch", event => {
  let url = new URL(event.request.url);
  url.hostname = "d2wpgkrer0gjtw.cloudfront.net"; //ubah sesuai kebutuhan
  let request = new Request(url, event.request);
  event.respondWith(
    fetch(request, {
      headers: {
        'Referer': '', //ubah sesuai kebutuhan
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36' //ubah sesuai kebutuhan dengan UA Anda
      }
    })
  );
});
