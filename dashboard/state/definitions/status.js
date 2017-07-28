(function () {
    "use strict";


    App.state.add("status",
        TJS.Structure.Use('Object', {
            contract: "StatusContract",
            value: {
                user: {
                    loggedin: false
                }
            }
        })
    );

}());