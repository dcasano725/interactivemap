// Force map sizing (since no CSS file)
document.getElementById('map').style.height = "100vh";
document.getElementById('map').style.width = "100%";

// Initialize map (temporary view — will auto-fit)
var map = L.map('map').setView([40.7215, -73.7942], 16);

// Base map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors',
  maxZoom: 22
}).addTo(map);

// Scale bar
L.control.scale().addTo(map);

// ----------------------
// D'ANGELO CENTER (ONLY MARKER)
// ----------------------
var dAngelo = L.marker([40.722528068066396, -73.79616254887759])
  .addTo(map)
  .bindPopup("D'Angelo Center<br><i>Educatio Christiana Animae Perfectio</i>");

// ----------------------
// CAMPUS BOUNDARY (approximate)
// ----------------------
var campusBounds = L.latLngBounds([
  [40.7245, -73.7985], // NW corner
  [40.7195, -73.7915]  // SE corner
]);

// Fit map to campus
map.fitBounds(campusBounds);
