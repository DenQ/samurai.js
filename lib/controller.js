'use strict';
var colors = require('colors');

class Controller{

    constructor(obj) {
        this.reply = obj.reply;
        this.request = obj.request;

        this.routeName = this.constructor.name.toLowerCase();
        this.originalRouteName = this.constructor.name;
    }

    Render() {
        var viewClass = this.GetViewClass();
        new viewClass();
    }

    GetViewClass() {
        var ViewRequired = require('../app/views/' + this.routeName + '/index');
        return ViewRequired;
    }

    Get() {
        //this.Foo();
    }

    GetAll() {
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

module.exports = Controller;