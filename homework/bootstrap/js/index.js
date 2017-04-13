/**
 * Created by user on 2017/4/11.
 */
var data = require('./bundle1.js'),
    add = require('./bundle2.js'),
    result = add(data.a,data.b);

console.log(result);