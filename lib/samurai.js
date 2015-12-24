'use strict';

var Route = require("../lib/route");
var Controller = require("../lib/controller");

class Samurai {}

Samurai.Route = Route;
Samurai.Controller = Controller;

module.exports = Samurai;