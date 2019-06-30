"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path = "./interfaces.ts" />
var EventEmitter = require("events");
var Mediator = /** @class */ (function () {
    function Mediator(isDebug) {
        if (isDebug === void 0) { isDebug = false; }
        this.myEventEmitter = new EventEmitter();
        this._$ = "";
        this._isDebug = isDebug;
    }
    /**
     * 发布触发事件
     * @param e 应用事件
     */
    Mediator.prototype.publish = function (e) {
        if (this._isDebug === true) {
            console.log(new Date().getTime(), "PUBLICSH", e.topic, e.data);
        }
        this.myEventEmitter.emit(e.topic, e.data);
    };
    ;
    /**
     * 订阅绑定事件
     * @param e
     */
    Mediator.prototype.subscribe = function (e) {
        if (this._isDebug === true) {
            console.log(new Date().getTime(), "SUBSCRIBE", e.topic, e.data);
        }
        this.myEventEmitter.on(e.topic, e.data);
    };
    ;
    /**
     * 取消 绑定事件
     * @param e
     */
    Mediator.prototype.unsubscribe = function (e) {
        if (this._isDebug === true) {
            console.log(new Date().getTime(), "UNSUBSCRIBE", e.topic, e.data);
        }
        this.myEventEmitter.off(e.topic, e.data);
    };
    ;
    return Mediator;
}());
exports.Mediator = Mediator;
