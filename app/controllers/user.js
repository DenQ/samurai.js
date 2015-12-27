'use strict';
var Samurai = require('../../lib/samurai');
var colors = require('colors');

class User extends Samurai.Controller{

    Get() {
        this.reply('Get id - , ' + encodeURIComponent(this.request.params.id) + '!');
        this.Render();
    }

    GetAll() {
        var route = this.route;
        route.reply('Get All!');
        console.log('controller get all'.yellow);
    }

    Post() {
        var route = this.route;
        route.reply('Get id - , ' + encodeURIComponent(route.request.params.id) + '!');
        console.log('controller post'.yellow);
    }

    Put() {
        var route = this.route;
        route.reply('Get id - , ' + encodeURIComponent(route.request.params.id) + '!');
        console.log('controller put'.yellow);
    }

    Delete() {
        var route = this.route;
        route.reply('Get id - , ' + encodeURIComponent(route.request.params.id) + '!');
        console.log('controller delete'.yellow);
    }

}

module.exports = User;

