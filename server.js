'use strict';

const Hapi = require('hapi');
const Vision = require('vision');
const Handlebars = require('handlebars');
const server = new Hapi.Server();
const Good = require('good');
const Config = require('./app/configs/main');

server.connection({
    port: Config.port
});

server.register(Vision, (err) => {
    if (err) {
        throw err;
    }

    server.views({
        engines: {
            handlebars: Handlebars,
        },
        path: __dirname + '/app/templates'
    });

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