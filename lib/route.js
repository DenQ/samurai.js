'use strict';
var server = require('../server');
var Samurai = require('./samurai');

class Route {

    constructor() {
        this.routeName = this.constructor.name.toLowerCase();
        this.originalRouteName = this.constructor.name;

        this.onGet();
        this.onGetAll();
        this.onPost();
        this.onPut();
        this.onDelete();
    }

    onGet() {
        var that = this;
        server.route({
            method: 'GET',
            path: '/' + this.routeName + '/{id}',
            handler: function(request, reply) {
                that.Get(request, reply);
            }
        });
    }

    onGetAll() {
        var that = this;
        server.route({
            method: 'GET',
            path: '/' + this.routeName + 's',
            handler: function(request, reply) {
                that.WrapHandler(request, reply, 'GetAll');
            }
        });
    }

    onPost() {
        var that = this;
        server.route({
            method: 'POST',
            path: '/' + this.routeName + '/{id}',
            handler: function(request, reply) {
                that.WrapHandler(request, reply, 'Post');
            }
        });
    }

    onPut() {
        var that = this;
        server.route({
            method: 'PUT',
            path: '/' + this.routeName + '/{id}',
            handler: function(request, reply) {
                that.WrapHandler(request, reply, 'Put');
            }
        });
    }

    onDelete() {
        var that = this;
        server.route({
            method: 'DELETE',
            path: '/' + this.routeName + '/{id}',
            handler: function(request, reply) {
                that.WrapHandler(request, reply, 'Delete');
            }
        });
    }

    WrapHandler(request, reply, ActionName) {
        var controllerClass = this.GetControllerClass();
        var controller = new controllerClass({
            request : request,
            reply : reply
        });
        controller[ActionName]();
    }

    GetControllerClass() {
        var ControllerRequired = require('../app/controllers/' + this.routeName);
        return ControllerRequired;
    }

    Get(request, reply) {
        this.WrapHandler(request, reply, 'Get');
    }

    GetAll(request, reply) {
        this.WrapHandler(request, reply, 'GetAll');
    }

    Post(request, reply) {
        this.WrapHandler(request, reply, 'Post');
    }

    Put(request, reply) {
        this.WrapHandler(request, reply, 'Post');
    }

    Delete(request, reply) {
        this.WrapHandler(request, reply, 'Delete');
    }

}

module.exports = Route;