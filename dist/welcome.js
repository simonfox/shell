System.register([], function (_export) {
  "use strict";

  var _classCallCheck, Welcome;
  return {
    setters: [],
    execute: function () {
      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Welcome = _export("Welcome", function Welcome() {
        _classCallCheck(this, Welcome);

        this.heading = "Welcome to Aurelia Dynamic Module Loader!";
      });
    }
  };
});