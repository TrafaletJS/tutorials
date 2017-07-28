(function () {

    "use strict";

    App.state.defineContract("ClockContract", {
      time: TJS.Structure.Use('Clock', {
        structure: 'hh:mm:ss'
      })
    });

}());