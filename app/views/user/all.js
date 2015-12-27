"use strict";

var Samurai = require('../../../lib/samurai');
var colors = require('colors');

class All extends Samurai.View{

    Render() {
        this.obj.reply('Get All!!!');
    }
}

module.exports = All;