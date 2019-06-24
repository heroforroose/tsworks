// 1, 类静态部分与实例部分
interface clockInterface {

}
// 定义构造器接口
interface clockConstructor {
  new (hour : number, minite : number) : object;
}

// factory function
function createClock(ctor : clockConstructor,hour : number,minite : number) : object {
  return new ctor(hour , minite);
}

class aclock implements clockInterface {
  constructor(h : number, m : number){};
}
class bclock implements clockInterface {
  constructor(h : number, m : number){};
}

let $aclock = createClock(aclock, 12, 12);
let $bclock = createClock(bclock, 11, 11);

// 2, 接口继承类
class Control {
  private state: any;
}

interface SelectableControl extends Control {
  select(): void;
}

class Button extends Control implements SelectableControl {
  select() { console.log("button"); }
}

class TextBox extends Control {
  select() { console.log("TextBox"); }
}
let $button = new Button();
let $Text = new TextBox();
console.log($button.select(),$Text.select());
// 错误：“Image”类型缺少“state”属性。
class Image implements SelectableControl {
  select() { }
}

class Location {

}