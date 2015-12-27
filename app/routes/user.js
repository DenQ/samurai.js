'use strict';
var Samurai = require('../../lib/samurai');

class User extends Samurai.Route{

    constructor() {
        super();
    }


    Get(request, reply) {
        super.Get(request, reply);
    }

    GetAll() {
        super.GetAll(request, reply);
    }

    Post() {
        super.Post(request, reply);
    }

    Put() {
        super.Put(request, reply);
    }

    Delete() {
        super.Delete(request, reply);
    }
}

module.exports = User;