'use strict';

var server = require('./../server');
var Samurai = require('../lib/samurai');

class User extends Samurai.Route{

    Get() {
        server.route({
            method: 'GET',
            path: '/user/{id}',
            handler: function (request, reply) {
                reply('Get id - , ' + encodeURIComponent(request.params.id) + '!');
            }
        });
    }

    Post() {
        server.route({
            method: 'POST',
            path: '/user/{id}',
            handler: function (request, reply) {
                reply('User id - , ' + encodeURIComponent(request.params.id) + '!');
            }
        })
    }

    Put() {
        server.route({
            method: 'PUT',
            path: '/user/{id}',
            handler: function (request, reply) {
                reply('User id - , ' + encodeURIComponent(request.params.id) + '!');
            }
        })
    }

    Delete() {
        server.route({
            method: 'DELETE',
            path: '/user/{id}',
            handler: function (request, reply) {
                reply('User id - , ' + encodeURIComponent(request.params.id) + '!');
            }
        })
    }
}

module.exports = User;