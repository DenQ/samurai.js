'use strict';

var server = require('./server');


const requireDir = require('require-dir');
const routes = requireDir('./routes', {recurse: true});
for(var item in routes) {
    new routes[item]();
}
