"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.replace = replace;
/**
 * String templating utility.
 */
/**
 * It creates and returns a new string based on a given template string and a set of actual values.
 * The set of actual values is a JS object (a hashmap of key-value pairs), whereas the template string
 * is a string that contains placeholders, which similar to the `ES6 Literal Templates`, will be replaced with actual values.
 * A placeholder is an identifier enclosed within curly braces and preceded by amd the 'Dollar' sign (`${expression}`),
 * which matches a key in the hashmap of actual values.
 * 
 * @param {string} sTemplate The string template, which, similar to the ES6 literal templates can contain value placeholders enclosed within curly braces and preceded by the 'Dollar' sign (`${expression}`)
 * @param {Object} mData a JS object (hashmap) containing the actual values to replace the template placeholders with.
 * @returns {string}
 */
function replace(sTemplate, mData) {
  if (typeof sTemplate === "string") {
    // mData = mData instanceof Object ? mData : {};
    mData = mData ? mData : {};
    return sTemplate.replace(/\$\{\s*([$#@\-\d\w]+)\s*\}/gim, function (fullMath, grp) {
      var val = mData[grp];
      if (typeof val === "function") {
        val = val();
      } else if (val === null || val === undefined) {
        val = "";
      } else if ((typeof val === "undefined" ? "undefined" : _typeof(val)) === "object" || (typeof val === "undefined" ? "undefined" : _typeof(val)) === "symbol") {
        val = val.toString();
      } else {
        val = val.valueOf();
      }
      return val;
    });
  }
  return "";
}
