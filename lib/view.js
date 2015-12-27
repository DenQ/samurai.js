'use strict';
var colors = require('colors');

class View{

    constructor(obj) {
        this.obj = obj;
        this.Render();
    }

    Render() {
        this.obj.reply('Get id - , ' + encodeURIComponent(this.obj.request.params.id) + '!');
    }

}

module.exports = View;