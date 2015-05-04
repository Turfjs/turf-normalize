normalize = require('geojson-normalize');

/**
 * Normalizes any {GeoJSON} to a {FeatureCollection} using [geojson-normalize](https://github.com/mapbox/geojson-normalize).
 *
 * @module turf/normalize
 * @category misc
 * @param {GeoJSON} input any valid GeoJSON
 * @return {FeatureCollection} a simplified feature
 * @example
 * var geometry = {
 *     "type": "Polygon",
 *     "coordinates": [[
 *       [-70.603637, -33.399918],
 *       [-70.614624, -33.395332],
 *       [-70.639343, -33.392466],
 *       [-70.659942, -33.394759],
 *       [-70.683975, -33.404504],
 *       [-70.697021, -33.419406],
 *       [-70.701141, -33.434306],
 *       [-70.700454, -33.446339],
 *       [-70.694274, -33.458369],
 *       [-70.682601, -33.465816],
 *       [-70.668869, -33.472117],
 *       [-70.646209, -33.473835],
 *       [-70.624923, -33.472117],
 *       [-70.609817, -33.468107],
 *       [-70.595397, -33.458369],
 *       [-70.587158, -33.442901],
 *       [-70.587158, -33.426283],
 *       [-70.590591, -33.414248],
 *       [-70.594711, -33.406224],
 *       [-70.603637, -33.399918]
 *     ]]
 *   };
 *
 * // wraps the geometry in a Feature and places it in a FeatureCollection
 * var normalized = turf.normalize(geometry)
 *
 * //=normalized
 */

module.exports = function (geojson) {
  return normalize(geojson);
}