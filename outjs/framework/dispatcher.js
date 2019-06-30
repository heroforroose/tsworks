"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path = "./interfaces.ts" />
var event_emitter_1 = require("./event_emitter");
var app_event_1 = require("./app_event");
var Dispatcher = /** @class */ (function (_super) {
    __extends(Dispatcher, _super);
    function Dispatcher(mediator, controllers) {
        var _this = _super.call(this, mediator) || this;
        _this._controllerHashMap = _this.getController(controllers);
        _this._currentController = null;
        _this._currentControllerName = null;
        return _this;
    }
    Dispatcher.prototype.initialize = function () {
        var _this = this;
        this.subscribeToEvents([
            new app_event_1.AppEvent("app.dispatch", null, function (e, data) {
                _this.dispatch(data);
            })
        ]);
    };
    Dispatcher.prototype.getController = function (controllers) {
        var hashMap, hashMapEntry, name, controller, l;
        hashMap = {};
        l = controllers.length;
        if (l <= 0) {
            this.triggerEvent(new app_event_1.AppEvent("app.error", "cannot ctraeate", null));
        }
        for (var i = 0; i < l; i++) {
            controller = controller[i];
            name = controller.controllerName;
            hashMapEntry = hashMap[name];
            if (hashMapEntry !== null && hashMapEntry !== undefined) {
                this.triggerEvent(new app_event_1.AppEvent("app.error", "two controller cannot use the same name", null));
            }
            hashMap[name] = controller.controller;
        }
        return hashMap;
    };
    Dispatcher.prototype.dispatch = function (route) {
        var Controller = this._controllerHashMap[route.controllerName];
        // 试图发现controller
        if (Controller === null || Controller === undefined) {
            this.triggerEvent(new app_event_1.AppEvent("app.error", "Controller not found : " + route.controllerName, null));
        }
        else {
            var controller = new Controller(this._mediator);
            var a = controller[route.actionName];
            if (a === null || a === undefined) {
                this.triggerEvent(new app_event_1.AppEvent("app.error", "Action not found in controller: " + route.controllerName + " - + " + route.actionName, null));
            }
            else {
                if (this._currentController == null) {
                    //初始化controller
                    this._currentControllerName = route.controllerName;
                    this._currentController = controller;
                    this._currentController.initialize();
                }
                else {
                    if (this._currentControllerName !== route.controllerName) {
                        this._currentController.dispose();
                        this._currentControllerName = route.controllerName;
                        this._currentController = controller;
                        this._currentController.initialize();
                    }
                }
                // let the stream from debuger passed to controller
                this.triggerEvent(new app_event_1.AppEvent("app.controller." + this._currentControllerName + "." + route.actionName, route.args, null));
            }
        }
    };
    return Dispatcher;
}(event_emitter_1.EventEmitter));
exports.Dispatcher = Dispatcher;
