var str_array = ["bob", "jack"];
var str_str_array = {
    1: "123",
    2: "234"
};
var str_obj = {
    "a": "aaa",
    "b": "bbb",
    "c": "ccc"
};
var twoIndexObj = {
    1: "1111",
    "asd": "asd"
};
console.log(str_array[1], str_str_array[1], str_obj["a"], twoIndexObj[1], twoIndexObj["asd"]);
function createCar(ctor, a, b) {
    return new ctor(a, b);
}
var sanCar = /** @class */ (function () {
    function sanCar(q, w) {
    }
    sanCar.prototype.move = function () {
        console.log("san car run ... ...");
    };
    return sanCar;
}());
var siCar = /** @class */ (function () {
    function siCar(e, r) {
    }
    siCar.prototype.move = function () {
        console.log("si car run ... ...");
    };
    return siCar;
}());
var $sanCar = createCar(sanCar, 3, 4);
var $siCar = createCar(siCar, 4, 4);
console.log($sanCar instanceof sanCar);
console.log($siCar instanceof siCar);
// 接口继承类
var Animal = /** @class */ (function () {
    function Animal() {
        this.name = "a Animal";
    }
    Animal.prototype.run = function () {
        console.log("Animal run ...");
    };
    return Animal;
}());
var $ani = { name: "123", run: function () { console.log("i am from Animal Class"); } };
console.log($ani.name);
$ani.run();
