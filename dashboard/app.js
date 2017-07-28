/**
 * App NS
 * @type {{}}
 */
let App = {};

(function (facade) {

    facade.events = TJS.Events.New("dashboard-events");
    facade.state = TJS.ApplicationState.New("dashboard-state");

    TJS.Config.set("modules.path", "./ui");
    TJS.Config.set("application.state", facade.state);

} (App));