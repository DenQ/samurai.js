'use strict';
var server = require('./../server');

class User {

    constructor() {
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