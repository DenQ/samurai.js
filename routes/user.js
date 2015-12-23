'use strict';

var server = require('./../server');
var Samurai = require('../lib/samurai');

class User extends Samurai.Route{

    constructor() {
        super();
        //@howto: extract base class, and split constructor on REST methods
        server.route({
            method: 'GET',
            path: '/user/{name}',
            handler: function (request, reply) {
                reply('User name - , ' + encodeURIComponent(request.params.name) + '!');
            }
        });


        server.route({
            method: 'GET',
            path: '/user/id{id}',
            handler: function (request, reply) {
                reply('User id - , ' + encodeURIComponent(request.params.id) + '!');
            }
        })
    }
}

module.exports = User;