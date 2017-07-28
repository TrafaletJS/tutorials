"use strict";

(function () {

  let
    Clock = {},
    View = TJS.module.load("clock");

    

  /**
   * @method view
   * @memberof Clock
   */
  Clock.view = function () {
    View.render();
  };

  /**
   * tick
   */
  Clock.tick = function (cb) {
    cb(new Date().getTime());

    setInterval(function () {
      cb(new Date().getTime());
    }, 500);
  };

  /**
   * @event ready
   */
  App.events.on("ready", function () {

    View.setContainer("demo-app");

    //Ugly construction to prove the point
    Clock.tick((time) => {

      const _clock = new Date(time);

      App.state.set('clock-state.time', [
        (10 <= _clock.getHours() ? _clock.getHours() : '0' + _clock.getHours()),
        (10 <= _clock.getMinutes() ? _clock.getMinutes(): '0' + _clock.getMinutes()),
        (10 <= _clock.getSeconds() ? _clock.getSeconds() :  '0' + _clock.getSeconds())
      ].join(':')); //To see errors in action, alter this format
    })
  });

  App.state.on('clock-state.time:change', Clock.view.bind(Clock));
  App.state.on('clock-state.time:error', function (err) {
    console.error(err);
  });

}());