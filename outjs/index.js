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
// factory function
function createClock(ctor, hour, minite) {
    return new ctor(hour, minite);
}
var aclock = /** @class */ (function () {
    function aclock(h, m) {
    }
    ;
    return aclock;
}());
var bclock = /** @class */ (function () {
    function bclock(h, m) {
    }
    ;
    return bclock;
}());
var $aclock = createClock(aclock, 12, 12);
var $bclock = createClock(bclock, 11, 11);
// 2, 接口继承类
var Control = /** @class */ (function () {
    function Control() {
    }
    return Control;
}());
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.select = function () { console.log("button"); };
    return Button;
}(Control));
var TextBox = /** @class */ (function (_super) {
    __extends(TextBox, _super);
    function TextBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextBox.prototype.select = function () { console.log("TextBox"); };
    return TextBox;
}(Control));
var $button = new Button();
var $Text = new TextBox();
console.log($button.select(), $Text.select());
// 错误：“Image”类型缺少“state”属性。
