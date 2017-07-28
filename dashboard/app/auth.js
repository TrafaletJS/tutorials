"use strict";

(function () {

    let Auth = {},
        Request = {},
        View = TJS.module.load("auth");

    /**
     * @method view
     * @memberof Auth
     */
    Auth.view = function () {
        View.render.apply(View, arguments);
    };

    Auth.login = function () {
        Request.login();
    };

    /**
     * Emulate a backend request
     */
    Request.login = function () {
        //On success
        App.state.set('status.user.loggedin', true);
    };

    /**
     * @event ready
     */
    App.events.on("ready", function () {
        View.setContainer("demo-app");
        Auth.view();
    });

    App.events.on('auth:login', Auth.login.bind(Auth));

}());