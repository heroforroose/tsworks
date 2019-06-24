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
 * model decortor
 * @param serviceUrl
 */
function ModelSettings(serviceUrl) {
    return function (target) {
        // 保存原构造函数的引用
        var original = target;
        function constructor(constructor, args) {
            var c = function () {
                return constructor.apply(this, args);
            };
            c.prototype = constructor.prototype;
            var instance = new c();
            instance._serviceUrl = serviceUrl;
            return instance;
        }
        // 新构造函数行为
        var f = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return constructor(original, args);
        };
        // 为了使 instance 操作符继续可用，复制原型
        f.prototype = original.prototype;
        // 返回新的构造函数（将原构造函数覆盖）
        return f;
    };
}
exports.ModelSettings = ModelSettings;
/**
 * model class
 */
var Model = /** @class */ (function (_super) {
    __extends(Model, _super);
    function Model(mediator) {
        return _super.call(this, mediator) || this;
    }
    // 由派生类实现
    Model.prototype.initialize = function () {
        throw new Error("model.prototype.initialize() is abstract and must implmented ");
    };
    // 由派生类实现
    Model.prototype.dispose = function () {
        throw new Error("model.prototype.dispose() is abstract and mustS implemented.");
    };
    Model.prototype.requestAsync = function (method, dataType, data) {
        return new Promise(function (resolve, reject) {
            //请求数据
        });
    };
    Model.prototype.getAsync = function (dataType, data) {
        return this.requestAsync("GET", dataType, data);
    };
    Model.prototype.postAsync = function (dataType, data) {
        return this.requestAsync("POST", dataType, data);
    };
    return Model;
}(event_emitter_1.EventEmitter));
exports.Model = Model;
