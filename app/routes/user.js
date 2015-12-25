'use strict';
var Samurai = require('../../lib/samurai');

class User extends Samurai.Route{

    constructor() {
        super();
    }

    Get() {
        this.controllerAction.bind({
            route: this
        })();
    }

    GetAll() {
        this.controllerAction.bind({
            route: this
        })();
    }

    Post() {
        this.controllerAction.bind({
            route: this
        })();
    }

    Put() {
        this.controllerAction.bind({
            route: this
        })();
    }

    Delete() {
        this.controllerAction.bind({
            route: this
        })();
    }
}

module.exports = User;