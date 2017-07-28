"use strict";

TJS.module("auth").add("Auth", {
    template: "auth-main",

    events:[{
        name: "login:clicked",
        handler: function () {
            //Capture data from a form here
            App.events.emit("auth:login");
        }
    }]
});