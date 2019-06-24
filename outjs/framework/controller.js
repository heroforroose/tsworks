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
exports.__esModule = true;
/// <reference path = "./interfaces.ts" />
var event_emitter_1 = require("./event_emitter");
/**
 * controller class
 */
var Controller = /** @class */ (function (_super) {
    __extends(Controller, _super);
    function Controller(mediator) {
        return _super.call(this, mediator) || this;
    }
    Controller.prototype.initialize = function () {
        throw new Error("controller.protype.initialize() is abstract you must implements it!");
    };
    Controller.prototype.dispose = function () {
        throw new Error("controller.protype.dispose() is abstract you must implements it!");
    };
    return Controller;
}(event_emitter_1.EventEmitter));
exports.Controller = Controller;
