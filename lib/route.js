'use strict';
var server = require('../server');

class Route {

    constructor() {
        this.routeName = this.constructor.name.toLowerCase();

        this.onGet();
        this.onGetAll();
        this.onPost();
        this.onPut();
        this.onDelete();
    }

    onGet() {
        server.route({
            method: 'GET',
            path: '/' + this.routeName + '/{id}',
            handler: this.Get
        });
    }

    onGetAll() {
        console.log(this.routeName);
        server.route({
            method: 'GET',
            path: '/' + this.routeName + 's',
            handler: this.GetAll
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