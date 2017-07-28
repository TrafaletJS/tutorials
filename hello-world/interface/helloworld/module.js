"use strict";

TJS.module('helloworld', function (module) {

  module.use('HelloWorld');

  module.on('render', function (data, container) {
    this.singleInstance('HelloWorld').render(data, container);
  });
});