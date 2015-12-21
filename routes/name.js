var server = require('./../server');

module.exports = server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
        reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
    }
});


server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello, world!!!');
    }
});