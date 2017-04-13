(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Created by user on 2017/4/11.
 */
var a = 1,
    b = 2;

module.exports = {
    a:a,
    b:b
}
},{}],2:[function(require,module,exports){
/**
 * Created by user on 2017/4/11.
 */
function add(a,b) {
    return a+b
}

module.exports = add;
},{}],3:[function(require,module,exports){
/**
 * Created by user on 2017/4/11.
 */
var data = require('./bundle1.js'),
    add = require('./bundle2.js'),
    result = add(data.a,data.b);

console.log(result);
},{"./bundle1.js":1,"./bundle2.js":2}]},{},[3])