(function () {
  "use strict";


  App.state.add("clock-state",
    TJS.Structure.Use('Object', {
      contract: 'ClockContract',
      value:    {
        time: '00:00:00'
      }
    })
  );

}());