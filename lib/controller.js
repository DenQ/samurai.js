'use strict';
var colors = require('colors');

class Controller{

    constructor(obj) {
        this.reply = obj.reply;
        this.request = obj.request;
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