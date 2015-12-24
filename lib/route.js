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
                var controllerName = that.routeName;
                var Controller = require('../app/controllers/' + controllerName);
                var __route = that.Get.bind({
                    controller: new Controller()
                });
                __route(request, reply);
            }
        });
    }

    onGetAll() {
        server.route({
            method: 'GET',
            path: '/' + this.routeName + 's',
            handler: this.GetAll.bind({
                'this': this,
                'controller': function() { console.log(111) }()
            })
        });
    }

    onPost() {
        server.route({
            method: 'POST',
            path: '/' + this.routeName + '/{id}',
            handler: this.Post
        });
    }

    onPut() {
        server.route({
            method: 'PUT',
            path: '/' + this.routeName + '/{id}',
            handler: this.Put
        });
    }

    onDelete() {
        server.route({
            method: 'DELETE',
            path: '/' + this.routeName + '/{id}',
            handler: this.Delete
        });
    }

    WrapHandler(request, reply) {

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