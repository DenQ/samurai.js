'use strict';

var Samurai = require('../lib/samurai');

class User extends Samurai.Route{

    Get(request, reply) {
        reply('Get id - , ' + encodeURIComponent(request.params.id) + '!');
    }

    GetAll(request, reply) {
        reply('Get all');
    }

    Post(request, reply) {
        reply('Get id - , ' + encodeURIComponent(request.params.id) + '!');
    }

    Put(request, reply) {
        reply('Get id - , ' + encodeURIComponent(request.params.id) + '!');
    }

    Delete(request, reply) {
        reply('Get id - , ' + encodeURIComponent(request.params.id) + '!');
    }
}

module.exports = User;