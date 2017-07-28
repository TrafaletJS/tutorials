"use strict";

TJS.module('clock', function (module) {

  module.use("Clock");

  module.on('render', function (data, container) {
    this.singleInstance("Clock").render(data, container);
  });
});