var map = L.map('map', {
  center: [40.7202, -73.7979],
  zoom: 12,
});


// Search Addresses
L.Control.geocoder({
  defaultMarkGeocode: false
})
  .on('markgeocode', function(e) {
    map.fitBounds(e.geocode.bbox);
  })
  .addTo(map);

map.locate({ setView: true, maxZoom: 18 });

map.on('locationfound', function(e) {
  L.marker(e.latlng).addTo(map)
    .bindPopup("You are here").openPopup();
});


//Scale bar
L.control.scale().addTo(map);

// --- Basemap options ---
var Satellite = L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  { attribution: 'Tiles © Esri' }
);

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

var EsriSat = L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  { attribution: 'Tiles © Esri' }
);

// Default basemap
Satellite.addTo(map);

// You can add or remove basemaps here. A button will appear top right of map to toggle.
var baseMaps = {
  "Satellite (Esri)": EsriSat,
  "CARTO Light": CartoLight,
  "CARTO Dark": CartoDark,
  "Stamen Terrain": StamenTerrain,
  "Esri Topo": EsriTopo
};

L.control.layers(baseMaps).addTo(map);


//// adding shapes to the map


// Make a simple circle
L.circle([40.72306699011135, -73.79483136562183], {
 radius: 20,
 color: "brown"
}).addTo(map)
 .bindPopup("Dunkin' Donuts and Bookstore");

// Make a shape
var polygon = L.polygon([
    [40.7230650130635, -73.79586802933966],
    [40.72220752024184, -73.79659346518204],
    [40.722076293455814, -73.79633374124181],
    [40.72280256259417, -73.79578145470224],
    [40.722852337758944, -73.7958620586837],
    [40.722979038010465, -73.79575458670841],
    [40.72306727554313, -73.79586802934898],
]).addTo(map);

polygon.bindPopup("D'Angelo Center");

// Add a marker
L.marker([40.722528068066396, -73.79616254887759]).addTo(map).bindPopup("D'Angelo Center");
L.marker([40.720594919860424, -73.79435969881555]).addTo(map).bindPopup("St. Thomas More Church");
L.marker([40.72151164116172, -73.79415208514875]).addTo(map).bindPopup("The Great Lawn");
L.marker([40.72148138861685, -73.79600592772292]).addTo(map).bindPopup("St. Albert Hall");
L.marker([40.721909140214194, -73.79495497611067]).addTo(map).bindPopup("St. Augustine Hall and Library");
L.marker([40.72192094021896, -73.79323842186763]).addTo(map).bindPopup("St. John Hall");
L.marker([40.722906681170514, -73.79499204439784]).addTo(map).bindPopup("St. Louise de Marillac Hall");
L.marker([40.72046120044752, -73.79544402694894]).addTo(map).bindPopup("St. Vincent Health Sciences Center");
L.marker([40.72181397799339, -73.79187291224696]).addTo(map).bindPopup("St. John's University School of Law");
L.marker([40.72346807069532, -73.79433346303881]).addTo(map).bindPopup("Peter J. Tobin School of Business");
L.marker([40.72419753506425, -73.79459093306828]).addTo(map).bindPopup("Carnesecca Arena");
L.marker([40.72190953618298, -73.7966147749239]).addTo(map).bindPopup("Sullivan Hall");
L.marker([40.72190953618298, -73.7966147749239]).addTo(map).bindPopup("Newman Hall");
L.marker([40.722380978098535, -73.79449777712783]).addTo(map).bindPopup("Lourdes Hall");
