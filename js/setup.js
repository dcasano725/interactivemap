var map = L.map('map', {
  center: [40.7202, 73.7979],
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
L.marker([39.983219999796114, -75.15356557830536]).addTo(map);
