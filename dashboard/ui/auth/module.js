TJS.module("auth", function (module) {

    module.use("Auth");

    module.on("render", function (data, container) {
        this.singleInstance("Auth").render(data, container);
    });
});