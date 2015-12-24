'use strict';
var Samurai = require('../../lib/samurai');

class User extends Samurai.Controller{

    constructor() {
        super();
        console.log(333);
    }
}

module.exports = User;

