define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Greeter {
        static message() {
            let currentTime = new Date().getHours();
            return "Good " + (currentTime < 12 ? "Morning" : currentTime < 18 ? "afternoon" : "evening");
        }
    }
    exports.Greeter = Greeter;
});
//# sourceMappingURL=greeter.js.map