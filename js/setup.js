// Force map sizing (since no CSS file)
document.getElementById('map').style.height = "100vh";
document.getElementById('map').style.width = "100%";

// Initialize map — ZOOMED IN CLOSER
var map = L.map('map').setView([40.7215, -73.7942], 22);

// Base map (reliable)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Scale bar
L.control.scale().addTo(map);

// ----------------------
// MARKERS
// ----------------------
L.marker([40.722528068066396, -73.79616254887759])
  .addTo(map)
  .bindPopup("D'Angelo Center<br><i>Educatio Christiana Animae Perfectio</i>");

// ----------------------
// SHAPES
// ----------------------
L.circle([40.72306699011135, -73.79483136562183], {
  radius: 20,
  color: "brown"
})
  .addTo(map)
  .bindPopup("Dunkin' Donuts and Bookstore");

L.polygon([
  [40.7230650130635, -73.79586802933966],
  [40.72220752024184, -73.79659346518204],
  [40.722076293455814, -73.79633374124181],
  [40.72280256259417, -73.79578145470224],
  [40.722852337758944, -73.7958620586837],
  [40.722979038010465, -73.79575458670841],
  [40.72306727554313, -73.79586802934898]
])
  .addTo(map)
  .bindPopup("D'Angelo Center");
