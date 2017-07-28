"use strict";

(function () {

    let Dashboard = {},
        View = TJS.module.load("dashboard");

    /**
     * @method view
     * @memberof Dashboard
     */
    Dashboard.view = function () {
        View.setContainer("demo-app");
        View.render.apply(View, arguments);
    };


    /**
     * Monitor state change
     */
    App.state.when("status.user.loggedin", "=", true, Dashboard.view.bind(Dashboard));

}());