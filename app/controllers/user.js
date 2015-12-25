'use strict';
var Samurai = require('../../lib/samurai');
var colors = require('colors');

class User extends Samurai.Controller{

    constructor() {
        super();
    }

    Get() {
        console.log('controller get'.yellow);
    }
    GetAll() {
        console.log('controller get all'.yellow);
    }
    Post() {
        console.log('controller post'.yellow);
    }
    Put() {
        console.log('controller put'.yellow);
    }
    Delete() {
        console.log('controller delete'.yellow);
    }

}

module.exports = User;

