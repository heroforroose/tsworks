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
/**
 * view 装饰器
 * @param templateUrl string
 * @param container string
 */
function ViewSettings(templateUrl, container) {
    return function (target) {
        var original = target;
        function construct(constructor, args) {
            var c = function () {
                return constructor.apply(this, args);
            };
            c.prototype = constructor.prototype;
            var instance = new c();
            instance._container = container;
            instance._templateUrl = templateUrl;
            return instance;
        }
        // 新的构造函数行为
        var f = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return construct(original, args);
        };
        // 为了使新的构造函数instancof操作符继续可用，复制原型
        f.prototype = original.prototype;
        // 返回新的构造函数
        return f;
    };
}
exports.ViewSettings = ViewSettings;
/**
 * view class
 */
var View = /** @class */ (function (_super) {
    __extends(View, _super);
    function View(mediator) {
        return _super.call(this, mediator) || this;
    }
    View.prototype.initialize = function () {
        throw new Error("view.prototype.initialize() is abstract and must implemented.");
    };
    View.prototype.dispose = function () {
        throw new Error("view.prototype.dispose() is abstract and must implemented.");
    };
    View.prototype.bindDomEvents = function (model) {
        throw new Error("view.prototype.bindDomEvents() is abstract and must implemented.");
    };
    View.prototype.unbindDomEvens = function (model) {
        throw new Error("view.prototype.unbindDomEvents() is abstract and must implemented.");
    };
    // 异步加载模板
    View.prototype.loadTemplateAsync = function () {
        // 请求模板
        return new Promise(function (resolve, reject) {
        });
    };
    // 异步编译模板
    View.prototype.compileTemplateAsync = function (source) {
        return new Promise(function (reject, resolve) {
            // let template : string = HandleBar.compile(source);
        });
    };
    //若操作未完成异步加载和编译模板
    View.prototype.getTemplateAsync = function () {
        return new Promise(function (reject, resolve) {
        });
    };
    // 渲染渲染一个view
    View.prototype.renderAsync = function () {
        return new Promise(function (reject, resolve) {
        });
    };
    return View;
}(event_emitter_1.EventEmitter));
exports.View = View;
