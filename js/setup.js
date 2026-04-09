// Force map sizing (required if no CSS file)
document.getElementById('map').style.height = "100vh";
document.getElementById('map').style.width = "100%";

// Initialize map
var map = L.map('map').setView([40.7202, -73.7979], 12);

// SAFE TILE LAYER (this prevents gray map)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Scale bar
L.control.scale().addTo(map);

// ----------------------
// MARKERS
// ----------------------
L.marker([40.722528068066396, -73.79616254887759]).addTo(map).bindPopup("D'Angelo Center");
L.marker([40.720594919860424, -73.79435969881555]).addTo(map).bindPopup("St. Thomas More Church");
L.marker([40.72151164116172, -73.79415208514875]).addTo(map).bindPopup("The Great Lawn");
L.marker([40.72148138861685, -73.79600592772292]).addTo(map).bindPopup("St. Albert Hall");
L.marker([40.721909140214194, -73.79495497611067]).addTo(map).bindPopup("St. Augustine Hall and Library");
L.marker([40.72192094021896, -73.79323842186763]).addTo(map).bindPopup("St. John Hall");
L.marker([40.722906681170514, -73.79499204439784]).addTo(map).bindPopup("St. Louise de Marillac Hall");
L.marker([40.72046120044752, -73.79544402694894]).addTo(map).bindPopup("St. Vincent Health Sciences Center");
L.marker([40.72181397799339, -73.79187291224696]).addTo(map).bindPopup("St. John's Law");
L.marker([40.72346807069532, -73.79433346303881]).addTo(map).bindPopup("Tobin School of Business");
L.marker([40.72419753506425, -73.79459093306828]).addTo(map).bindPopup("Carnesecca Arena");
L.marker([40.72190953618298, -73.7966147749239]).addTo(map).bindPopup("Sullivan Hall");
L.marker([40.722380978098535, -73.79449777712783]).addTo(map).bindPopup("Lourdes Hall");

// ----------------------
// SHAPES
// ----------------------
L.circle([40.72306699011135, -73.79483136562183], {
  radius: 20,
  color: "brown"
}).addTo(map).bindPopup("Dunkin' Donuts and Bookstore");

L.polygon([
  [40.7230650130635, -73.79586802933966],
  [40.72220752024184, -73.79659346518204],
  [40.722076293455814, -73.79633374124181],
  [40.72280256259417, -73.79578145470224],
  [40.722852337758944, -73.7958620586837],
  [40.722979038010465, -73.79575458670841],
  [40.72306727554313, -73.79586802934898]
]).addTo(map).bindPopup("D'Angelo Center");
