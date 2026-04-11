// Force map sizing
document.getElementById('map').style.height = "100vh";
document.getElementById('map').style.width = "100%";

// Initialize map (clean + controlled zoom)
var map = L.map('map').setView([40.722, -73.7945], 16);

// Base map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors',
  maxZoom: 22
}).addTo(map);

// Scale bar
L.control.scale().addTo(map);

// ----------------------
// D'ANGELO CENTER MARKER
// ----------------------
L.marker([40.722528068066396, -73.79616254887759])
  .addTo(map)
  .bindPopup("D'Angelo Center");

// ----------------------
// COFFEE SHOP CIRCLE (FIXED)
// ----------------------
L.circle([40.72306699011135, -73.79483136562183], {
  radius: 15,          // slightly larger so it's visible
  color: "brown",
  fillOpacity: 0.5     // makes it actually visible
}).addTo(map)
  .bindPopup("Dunkin' Donuts and Bookstore");

// ----------------------
// D'ANGELO POLYGON (FIXED)
// ----------------------
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
  fillOpacity: 0.3   // THIS is why you couldn’t see it before
}).addTo(map)
  .bindPopup("D'Angelo Center");
