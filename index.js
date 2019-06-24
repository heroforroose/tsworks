import { View } from "./outjs/framework/index";
console.log(View);
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
console.log("test asdf:", typeof $aclock, typeof $bclock);
var E;
(function (E) {
    E[E["yes"] = 1] = "yes";
    E[E["no"] = 2] = "no";
})(E || (E = {}));
console.log(E.yes, E.no);
