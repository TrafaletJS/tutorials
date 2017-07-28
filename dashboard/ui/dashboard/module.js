"use strict";

TJS.module("dashboard", function (module) {

    module.use("Dashboard");

    module.on("render", function (data, container) {
        this.singleInstance("Dashboard").render(data, container);
    });
});