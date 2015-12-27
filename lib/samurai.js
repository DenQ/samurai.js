'use strict';

var Route = require("../lib/route");
var Controller = require("../lib/controller");
var View = require("../lib/view");

class Samurai {}

Samurai.Route = Route;
Samurai.Controller = Controller;
Samurai.View = View;

module.exports = Samurai;