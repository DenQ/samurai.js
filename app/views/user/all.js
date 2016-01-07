"use strict";

var Samurai = require('../../../lib/samurai');
var colors = require('colors');

class All extends Samurai.View{

    Render() {
        //this.obj.reply('Get All!!!');

        //@howto: right way. Need layouts
        this.obj.reply.view('user/all', {
            message: 'Hello World!'
        });
    }
}

module.exports = All;