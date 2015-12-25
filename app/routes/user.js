'use strict';
var Samurai = require('../../lib/samurai');

class User extends Samurai.Route{

    constructor() {
        super();
    }

    Get() {
        this.controllerAction();
        this.reply('Get id - , ' + encodeURIComponent(this.request.params.id) + '!');
    }

    GetAll() {
        this.controllerAction();
        this.reply('Get all');
    }

    Post() {
        this.controllerAction();
        this.reply('Get id - , ' + encodeURIComponent(this.request.params.id) + '!');
    }

    Put() {
        this.controllerAction();
        this.reply('Get id - , ' + encodeURIComponent(this.request.params.id) + '!');
    }

    Delete() {
        this.controllerAction();
        this.reply('Get id - , ' + encodeURIComponent(this.request.params.id) + '!');
    }
}

module.exports = User;