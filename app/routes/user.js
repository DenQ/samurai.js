'use strict';
var Samurai = require('../../lib/samurai');

class User extends Samurai.Route{

    Get() {
        this.reply('Get id - , ' + encodeURIComponent(this.request.params.id) + '!');
    }

    GetAll() {
        this.reply('Get all');
    }

    Post() {
        this.reply('Get id - , ' + encodeURIComponent(this.request.params.id) + '!');
    }

    Put() {
        this.reply('Get id - , ' + encodeURIComponent(this.request.params.id) + '!');
    }

    Delete() {
        this.reply('Get id - , ' + encodeURIComponent(this.request.params.id) + '!');
    }
}

module.exports = User;