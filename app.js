'use strict';

var requireDir = require('require-dir');
var routes = requireDir('./app/routes', {recurse: true});

for(var item in routes) {
    new routes[item]();
}
