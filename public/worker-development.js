/******/ (function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Flag the module as loaded
    /******/ module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/ __webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/ __webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/ __webpack_require__.d = function (exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, { enumerable: true, get: getter });
      /******/
    }
    /******/
  };
  /******/
  /******/ // define __esModule on exports
  /******/ __webpack_require__.r = function (exports) {
    /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      /******/
    }
    /******/ Object.defineProperty(exports, '__esModule', { value: true });
    /******/
  };
  /******/
  /******/ // create a fake namespace object
  /******/ // mode & 1: value is a module id, require it
  /******/ // mode & 2: merge all properties of value into the ns
  /******/ // mode & 4: return value when already ns object
  /******/ // mode & 8|1: behave like require
  /******/ __webpack_require__.t = function (value, mode) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, 'default', { enumerable: true, value: value });
    /******/ if (mode & 2 && typeof value != 'string')
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key];
          }.bind(null, key),
        );
    /******/ return ns;
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/ __webpack_require__.n = function (module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module['default'];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, 'a', getter);
    /******/ return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/ __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/ __webpack_require__.p = '';
  /******/
  /******/
  /******/ // Load entry module and return exports
  /******/ return __webpack_require__((__webpack_require__.s = 0));
  /******/
})(
  /************************************************************************/
  /******/ [
    /* 0 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
      // declare let self: ServiceWorkerGlobalScope;
      // To disable all workbox logging during development, you can set self.__WB_DISABLE_DEV_LOGS to true
      // https://developers.google.com/web/tools/workbox/guides/configure-workbox#disable_logging
      //
      // self.__WB_DISABLE_DEV_LOGS = true

      Object(_util__WEBPACK_IMPORTED_MODULE_0__['util'])();
      workbox.routing.registerRoute(function (_ref) {
        var request = _ref.request;
        return request.destination === 'image';
      }, new workbox.strategies.CacheFirst()); // listen to message event from window

      self.addEventListener('message', function (event) {
        // HOW TO TEST THIS?
        // Run this in your browser console:
        //     window.navigator.serviceWorker.controller.postMessage({command: 'log', message: 'hello world'})
        // OR use next-pwa injected workbox object
        //     window.workbox.messageSW({command: 'log', message: 'hello world'})
        // console.log(event === null || event === void 0 ? void 0 : event.data);
      });
      self.addEventListener('push', function (event) {
        var data = JSON.parse(
          (event === null || event === void 0 ? void 0 : event.data.text()) || '{}',
        );
        event === null || event === void 0
          ? void 0
          : event.waitUntil(
              self.registration.showNotification(data.title, {
                body: data.message,
                icon: '/icons/android-chrome-192x192.png',
              }),
            );
      });
      self.addEventListener('notificationclick', function (event) {
        event === null || event === void 0 ? void 0 : event.notification.close();
        event === null || event === void 0
          ? void 0
          : event.waitUntil(
              self.clients
                .matchAll({
                  type: 'window',
                  includeUncontrolled: true,
                })
                .then(function (clientList) {
                  if (clientList.length > 0) {
                    var client = clientList[0];

                    for (var i = 0; i < clientList.length; i++) {
                      if (clientList[i].focused) {
                        client = clientList[i];
                      }
                    }

                    return client.focus();
                  }

                  return self.clients.openWindow('/');
                }),
            );
      });

      /***/
    },
    /* 1 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'util',
        function () {
          return util;
        },
      );
      function util() {
        // console.log('Hello from util.');
        // console.log('es6+ syntax test:');
        var foo = {
          message: 'working',
        };
        // console.log(foo === null || foo === void 0 ? void 0 : foo.message);
      }

      /***/
    },
    /******/
  ],
);
