
/**
 * util
 */

/**
 * hahah
 * @return {Object} [description]
 */
var util = function() {
  'use strict';
  /**
   * [setObj description]
   * @param {[type]} obj [description]
   * @param {[type]} key [description]
   * @param {[type]} val [description]
   * @playgroud
   * var util = require('./util');
   * var a = {};
   * util.setObj(a, 'b.c', 2)
   * a
   */
  function setObj(obj, key, val) {
    let k = key;
    if(k.indexOf('.') > -1) {
      let segments = key.split('.');
      k = segments.pop();

      segments.forEach((k) => {
        if(! obj.hasOwnProperty(k)) {
          obj[k] = {};
        }
        obj = obj[k];
      });
    }
    return (obj[k] = val);
  }
  /**
   * getObj
   * @param  {[type]} obj [description]
   * @param  {[type]} key [description]
   * @param  {[type]} def [description]
   * @return {[type]}     [description]
   */
  function getObj(obj, key, def) {
    let k = key;
    if(k.indexOf('.') > -1) {
      let segments = key.split('.');
      k = segments.pop();

      segments.forEach((k) => {
        if(! obj.hasOwnProperty(k)) {
          obj = false;
          return false;
        }
        obj = obj[k];
      });
    }
    return obj ? (typeof obj[k] != 'undefined' ? obj[k] : def) : def;
  }
  function key2Func(key) {
    let parts = key.split('.');
    let k = parts.pop();
    let name = 'set' + parts.map((p) => p[0].toUpperCase() + p.substr(1)).join('')
    return [name, k];
  }
  function val(self, key) {
    if(typeof self[key] == 'function') {
      self[key] = self[key]();
    }
  }
  function addScript(code, id) {
    let scriptId = 'script_' + id;
    let scriptElement = $('#' + scriptId);
    if(!scriptElement.length) {
      scriptElement = $('<script/>').attr('id', scriptId).appendTo(document.body);
    }
    $(scriptElement).html(code);
  }
  function addCss(code, id) {
    let styleId = 'style_' + id;
    let styleElement = $('#' + styleId);
    if(!styleElement.length) {
      styleElement = $('<style/>').attr('id', styleId).appendTo(document.head);
    }
    $(styleElement).html(code);
  }
  return {setObj, getObj, key2Func, val, addScript, addCss };
}();

if(typeof module != 'undefined' && module.exports) {
  module.exports = util;
}


