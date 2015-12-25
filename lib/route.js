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
                that.WrapHandler(request, reply, 'Get');
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

    WrapHandler(request, reply, methodName) {
        var ControllerRequired = require('../app/controllers/' + this.routeName);
        var Controller = ControllerRequired;
        Controller.prototype.route = this;
        var __controller = new Controller();
        var __routeAction = this[methodName].bind({
            controller: __controller,
            request: request,
            reply: reply
        });
        __routeAction();
        //@todo: run controller action Route::GetAll() to Controller::GetAll()
    }

    Get() {
        throw false;
    }
    GetAll() {
        throw false;
    }
    Post() {
        throw false;
    }
    Put() {
        throw false;
    }
    Delete() {
        throw false;
    }

}

module.exports = Route;