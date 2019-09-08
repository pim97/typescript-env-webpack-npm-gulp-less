"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const L = require("leaflet");
const re = require("redom");
class Map {
    constructor(long, lat) {
        this.long = long;
        this.lat = lat;
    }
    getLong() {
        return this.long;
    }
    getLat() {
        return this.lat;
    }
}
const mymap = L.map('mapid');
let map = null;
init();
function init() {
    intializeMap();
}
let lat = re.el('input#lat', { type: 'number' });
let long = re.el('input#long', { type: 'number' });
re.mount(document.body, lat);
re.mount(document.body, long);
function intializeMap() {
    var gps = navigator.geolocation.getCurrentPosition(function (position) {
        let obj = { "long": null, "lat": null };
        obj.long = position.coords.longitude;
        obj.lat = position.coords.latitude;
        mymap.setView([obj.lat, obj.long], 25);
        addMarker(obj.lat, obj.long);
        mymap.on('click', function (e) {
            addMarker(e.latlng.lat, e.latlng.lng);
            re.setAttr(lat, {
                value: e.latlng.lat
            });
            re.setAttr(long, {
                value: e.latlng.lng
            });
        });
    });
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: '',
        id: 'mapbox.streets'
    }).addTo(mymap);
}
function addMarker(lat, long) {
    return L.marker([lat, long]).addTo(mymap);
}
