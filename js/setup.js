// Initialize map (FIXED)
var map = L.map('map').setView([40.7202, -73.7979], 12);

// --- Basemap (add ONE first so map always loads) ---
var Satellite = L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  { attribution: 'Tiles © Esri' }
).addTo(map); // IMPORTANT: must add default layer immediately

var CartoLight = L.tileLayer(
  'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
  { attribution: '&copy; OpenStreetMap contributors & CARTO' }
);

var CartoDark = L.tileLayer(
  'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
  { attribution: '&copy; OpenStreetMap contributors & CARTO' }
);

var StamenTerrain = L.tileLayer(
  'https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg',
  { attribution: 'Map tiles by Stamen Design — Data © OpenStreetMap' }
);

var EsriTopo = L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
  { attribution: 'Tiles © Esri' }
);

// --- Layer control ---
var baseMaps = {
  "Satellite (Esri)": Satellite,
  "CARTO Light": CartoLight,
  "CARTO Dark": CartoDark,
  "Stamen Terrain": StamenTerrain,
  "Esri Topo": EsriTopo
};

L.control.layers(baseMaps).addTo(map);

// --- Controls ---
L.control.scale().addTo(map);

// Geocoder (ONLY if plugin is loaded in HTML)
if (L.Control.geocoder) {
  L.Control.geocoder({
    defaultMarkGeocode: false
  })
    .on('markgeocode', function(e) {
      map.fitBounds(e.geocode.bbox);
    })
    .addTo(map);
}

// --- Markers ---
var markers = [
  [40.722528068066396, -73.79616254887759, "D'Angelo Center"],
  [40.720594919860424, -73.79435969881555, "St. Thomas More Church"],
  [40.72151164116172, -73.79415208514875, "The Great Lawn"],
  [40.72148138861685, -73.79600592772292, "St. Albert Hall"],
  [40.721909140214194, -73.79495497611067, "St. Augustine Hall and Library"],
  [40.72192094021896, -73.79323842186763, "St. John Hall"],
  [40.722906681170514, -73.79499204439784, "St. Louise de Marillac Hall"],
  [40.72046120044752, -73.79544402694894, "St. Vincent Health Sciences Center"],
  [40.72181397799339, -73.79187291224696, "St. John's Law"],
  [40.72346807069532, -73.79433346303881, "Tobin Business School"],
  [40.72419753506425, -73.79459093306828, "Carnesecca Arena"],
  [40.72190953618298, -73.7966147749239, "Sullivan Hall"],
  [40.72190953618298, -73.7966147749239, "Newman Hall"],
  [40.722380978098535, -73.79449777712783, "Lourdes Hall"]
];

markers.forEach(m => {
  L.marker([m[0], m[1]]).addTo(map).bindPopup(m[2]);
});

// --- Shapes ---
L.circle([40.72306699011135, -73.79483136562183], {
  radius: 20,
  color: "brown"
}).addTo(map)
  .bindPopup("Dunkin' Donuts and Bookstore");

L.polygon([
  [40.7230650130635, -73.79586802933966],
  [40.72220752024184, -73.79659346518204],
  [40.722076293455814, -73.79633374124181],
  [40.72280256259417, -73.79578145470224],
  [40.722852337758944, -73.7958620586837],
  [40.722979038010465, -73.79575458670841],
  [40.72306727554313, -73.79586802934898]
]).addTo(map).bindPopup("D'Angelo Center");
