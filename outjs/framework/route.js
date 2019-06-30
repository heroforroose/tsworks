"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path = "./interfaces.ts" />
/**
 * route
 */
var Route = /** @class */ (function () {
    function Route(controllerName, actionName, args) {
        this.controllerName = controllerName;
        this.actionName = actionName;
        this.args = args;
    }
    Route.prototype.serialize = function () {
        var s, sargs;
        sargs = this.args.map(function (a) { return a.toString(); }).join("/");
        s = this.controllerName + "/" + this.actionName + "/" + sargs;
        return s;
    };
    return Route;
}());
exports.Route = Route;
