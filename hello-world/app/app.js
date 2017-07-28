"use strict";

(function () {

  let
    HelloWorld = {},
    View = TJS.module.load("helloworld");

  /**
   * @method view
   * @memberof HelloWorld
   */
  HelloWorld.view = function () {
    View.render.apply(View, arguments);
  };
  /**
   * @event ready
   */
  App.events.on("ready", function () {
    View.setContainer("demo-app");
    HelloWorld.view({});
  });
}());