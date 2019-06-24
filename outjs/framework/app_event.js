"use strict";
exports.__esModule = true;
/// <reference path = "./interfaces.ts" />
var AppEvent = /** @class */ (function () {
    function AppEvent(topic, data, handler) {
        this.topic = topic;
        this.data = data;
        this.handler = handler;
    }
    return AppEvent;
}());
exports.AppEvent = AppEvent;
