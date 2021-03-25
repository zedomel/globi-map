import L from 'leaflet';
import 'leaflet/dist/leaflet.css'

var map = L.map('map',{center: [53.15, -6.7], zoom: 10}); 
// OSM Baselayer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);