(function () {

    "use strict";

    /**
     * @contract UserContract
     */
    App.state.defineContract("UserContract", {
        loggedin: TJS.Structure.Use('Boolean', {
            required: false
        })
    });

    /**
     * @contract StatusContract
     */
    App.state.defineContract("StatusContract", {
        user: TJS.Structure.Use('Object', {
            contract: 'UserContract',
            required: false
        })
    });



}());