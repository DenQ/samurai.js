"use strict";

var Samurai = require('../../../lib/samurai');
var colors = require('colors');

class All extends Samurai.View{

    Init() {
        super.Init();
    }

    Render() {
        //this.obj.reply('Get All!!!');

        this.obj.reply.view('user/all', {
            title: 'Title...',
            message: 'Hello World!'
        }, {
            layout: this.layout
        });
    }
}

module.exports = All;