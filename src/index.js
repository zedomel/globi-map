import L from 'leaflet';
import 'leaflet.heat';
import 'leaflet-ajax';

// Styles
import 'leaflet/dist/leaflet.css'
import '../style/style.css'

var map = L.map('map',{center: [53.15, -6.7], zoom: 10}); 
// OSM Baselayer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);

var pointStyle = {
    radius: 2,
    fillColor: "#000000",
    color: "#000000",
    weight: 1,
    fillOpacity: 1
};
var points = new L.GeoJSON.AJAX('globi-obs.geojson', {
    middleware:function(data){
        coords = []; //define an array to store coordinates
        L.geoJSON(data, {
            pointToLayer: (feature, latlng) => L.circleMarker(latlng, pointStyle),
            onEachFeature: (feature, layer) => coords.push(feature.geometry.coordinates),
            coordsToLatLng: coords => L.heatLayer(coords, {radius:12,blur:25,maxZoom:11})            
        });        
    }
}).addTo(map);