const App = {};

(function (facade) {

  facade.events = TJS.Events.New("clock");
  facade.state = TJS.ApplicationState.New("clock");

  TJS.Config.set("modules.path", "./interface");
  TJS.Config.set("application.state", facade.state);

} (App));