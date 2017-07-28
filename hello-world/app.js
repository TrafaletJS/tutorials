/**
 * HelloWorld NS
 * @type {{}}
 */
let App = {};

(function (facade) {

  facade.events = TJS.Events.New("helloworld-events");
  TJS.Config.set("modules.path", "./interface");
} (App));