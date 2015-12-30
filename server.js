'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();
const Good = require('good');
const Config = require('./app/configs/main');

server.connection({
    port: Config.port
});

server.register({
    register: Good,
    options: {
        reporters: [{
            reporter: require('good-console'),
            events: {
                response: '*',
                log: '*'
            }
        }]
    }
}, function (err) {
    if (err) {
        throw err;
    }

    server.start(function () {
        server.log('info', 'Server running at: ' + server.info.uri);
    });
});

module.exports = server;