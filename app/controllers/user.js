'use strict';
var Samurai = require('../../lib/samurai');
var colors = require('colors');

class User extends Samurai.Controller{

    Get() {
        this.Render();
    }

    GetAll() {
        this.viewName = 'all'
        this.Render();
    }

    Post() {
        this.Render();
    }

    Put() {
        this.Render();
    }

    Delete() {
        this.Render();
    }

}

module.exports = User;

