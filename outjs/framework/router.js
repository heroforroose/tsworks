"use strict";
/// <reference path = "./interfaces.ts" />
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
var event_emitter_1 = require("./event_emitter");
var app_event_1 = require("./app_event");
var route_1 = require("./route");
/**
 * Router class
 */
var Router = /** @class */ (function (_super) {
    __extends(Router, _super);
    function Router(mediator, defaultController, defaultAction) {
        var _this = _super.call(this, mediator) || this;
        _this._defaultController = defaultController || "home";
        _this._defaultAction = defaultAction || "index";
        return _this;
    }
    Router.prototype.initialize = function () {
        var _this = this;
        var window; //类似DOM
        window.on("hashchange", function () {
            var r = _this.getRoute();
            _this.onRouteChange(r);
        });
        this.subscribeToEvents([
            new app_event_1.AppEvent("app.initialize", null, function (e, data) {
                _this.onRouteChange(_this.getRoute());
            }),
            new app_event_1.AppEvent("app.route", null, function (e, data) {
                _this.setRoute(data);
            })
        ]);
    };
    Router.prototype.subscribeToEvents = function (arg) {
        throw new Error("Method not implemented.");
    };
    Router.prototype.getRoute = function () {
        var h = window.location.hash;
        return this.parseRoute(h);
    };
    Router.prototype.setRoute = function (route) {
        var s = route.serialize();
        window.location.hash = s;
    };
    Router.prototype.parseRoute = function (hash) {
        var comp, controller, action, args, i;
        if (hash[hash.length - 1] === "/") {
            hash = hash.substring(0, hash.length - 1);
        }
        comp = hash.replace("#", '').split('/');
        controller = comp[1] || this._defaultController;
        action = comp[1] || this._defaultAction;
        args = [];
        for (var i_1 = 2; i_1 < comp.length; i_1++) {
            args.push(comp[i_1]);
        }
        return new route_1.Route(controller, action, args);
    };
    Router.prototype.onRouteChange = function (route) {
        this.triggerEvent(new app_event_1.AppEvent("app.dispatch", route, null));
    };
    return Router;
}(event_emitter_1.EventEmitter));
exports.Router = Router;
