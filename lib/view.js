'use strict';
var colors = require('colors');
var Config = require('../app/configs/main');

class View{

    constructor(obj) {
        this.obj = obj;
        this.Init();
        this.Render();
    }

    Init() {
        this.layout = this.layout || Config.views.layout;
    }

    Render() {
        this.obj.reply('Get id - , ' + encodeURIComponent(this.obj.request.params.id) + '!');
    }

}

module.exports = View;