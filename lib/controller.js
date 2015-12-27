'use strict';
var colors = require('colors');

class Controller{

    constructor(obj) {
        this.obj = obj;
        this.reply = obj.reply;
        this.request = obj.request;
        this.viewName = 'index'

        this.routeName = this.constructor.name.toLowerCase();
        this.originalRouteName = this.constructor.name;
    }

    Render() {
        var viewClass = this.GetViewClass();
        new viewClass(this.obj);
    }

    GetViewClass() {
        var ViewRequired = require('../app/views/' + this.routeName + '/' + this.viewName);
        return ViewRequired;
    }

    Get() { }

    GetAll() { }

    Post() { }

    Put() { }

    Delete() { }

}

module.exports = Controller;