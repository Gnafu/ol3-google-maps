/**
 * @module olgm/gm/PanesOverlay
 */
import {inherits} from 'ol/index.js';

/**
 * This overlay doesn't actually do anything, it's only a way to get the map's
 * panes since Google Maps' API doesn't offer any other way to do so.
 * @param {google.maps.Map} gmap Google Maps map
 * @constructor
 * @extends {google.maps.OverlayView}
 * @api
 */
const PanesOverlay = function(gmap) {
  this.setMap(gmap);
};

if (window.google && window.google.maps) {
  inherits(PanesOverlay, google.maps.OverlayView);
}


/**
 * This function is the only reason this class exists. It returns the panes.
 * @return {google.maps.MapPanes|undefined} array of panes
 * @api
 */
PanesOverlay.prototype.getMapPanes = function() {
  return this.getPanes();
};


/**
 * Override parent function, but do not do anything
 * @api
 * @override
 */
PanesOverlay.prototype.onAdd = function() {

};


/**
 * Override parent function, but do not do anything
 * @api
 * @override
 */
PanesOverlay.prototype.draw = function() {

};


/**
 * Override parent function, but do not do anything
 * @api
 * @override
 */
PanesOverlay.prototype.onRemove = function() {

};
export default PanesOverlay;
