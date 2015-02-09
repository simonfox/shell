System.register(["aurelia-loader"], function (_export) {
  "use strict";

  var Loader, _prototypeProperties, _classCallCheck, Injector;
  return {
    setters: [function (_aureliaLoader) {
      Loader = _aureliaLoader.Loader;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Injector = _export("Injector", (function () {
        function Injector(loader) {
          _classCallCheck(this, Injector);

          this.loader = loader;

          this.heading = "Welcome to the Aurelia Navigation App!";
        }

        _prototypeProperties(Injector, {
          inject: {
            value: function inject() {
              return [Loader];
            },
            writable: true,
            configurable: true
          }
        }, {
          welcome: {
            value: function welcome() {
              this.loader.loadModule("my-plugin", "").then(function (m) {
                new m.Bootstrap();
              });

            },
            writable: true,
            configurable: true
          }
        });

        return Injector;
      })());
    }
  };
});