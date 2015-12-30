'use strict';

var Route = require("../lib/route");
var Controller = require("../lib/controller");
var View = require("../lib/view");
var Config = require('../app/configs/main');

class Samurai {}

Samurai.Route = Route;
Samurai.Controller = Controller;
Samurai.View = View;
Samurai.View = View;
Samurai.Config = Config;

module.exports = Samurai;