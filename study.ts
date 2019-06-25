// 索引类型
interface stringArray {
  [propertyName: number]: string
}
interface stringObj {
  [propertyName: string]: string
}
interface twoIndex {
  [y: number]: any,
  [x: string]: any
}
let str_array : stringArray = ["bob","jack"];
let str_str_array : stringArray = {
  1: "123",
  2: "234"
}
let str_obj : stringObj = {
  "a": "aaa",
  "b": "bbb",
  "c": "ccc"
}
let twoIndexObj : twoIndex = {
  1:"1111",
  "asd": "asd"
}
console.log(str_array[1] ,str_str_array[1] ,str_obj["a"] ,twoIndexObj[1],twoIndexObj["asd"]);

// 构造函数检查
interface carConstructor {
  new (h : number, l : number);
}
function createCar(ctor : carConstructor, a : number, b : number){
  return new ctor(a, b);
}
class sanCar {
  constructor(q : number, w : number){}
  move(){
    console.log("san car run ... ...");
  }
}
class siCar {
  constructor(e : number, r: number){}
  move(){
    console.log("si car run ... ...");
  }
}

let $sanCar = createCar(sanCar,3,4);
let $siCar = createCar(siCar,4,4);

console.log($sanCar instanceof sanCar);
console.log($siCar instanceof siCar);

// 接口继承类
class Animal {
  name = "a Animal";
  run(){
    console.log("Animal run ...");
  }
}
interface ani extends Animal {

}
let $ani : ani = { name: "123", run: function(){ console.log("i am from Animal Class"); }} 
console.log($ani.name);
$ani.run();