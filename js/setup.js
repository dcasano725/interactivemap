<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Map</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css" />
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body { height: 100%; }
    #map { height: 100vh; width: 100%; }
  </style>
</head>
<body>
  <div id="map"></div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js"></script>
  <script>
    const map = L.map('map').setView([40.7218, -73.7948], 16);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 22
    }).addTo(map);

    L.control.scale().addTo(map);

    L.marker([40.722528068066396, -73.79616254887759])
      .addTo(map)
      .bindPopup("D'Angelo Center");

    L.circle([40.72306699011135, -73.79483136562183], {
      radius: 15,
      color: "brown",
      fillOpacity: 0.5
    }).addTo(map).bindPopup("Dunkin' Donuts and Bookstore");

    L.polygon([
      [40.7230650130635, -73.79586802933966],
      [40.72220752024184, -73.79659346518204],
      [40.722076293455814, -73.79633374124181],
      [40.72280256259417, -73.79578145470224],
      [40.722852337758944, -73.7958620586837],
      [40.722979038010465, -73.79575458670841],
      [40.72306727554313, -73.79586802934898]
    ], {
      color: "red",
      weight: 3,
      fillOpacity: 0.3
    }).addTo(map);
  </script>
</body>
</html>
