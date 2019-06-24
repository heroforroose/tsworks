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
console.log("test asdf:",typeof $aclock,typeof $bclock)
enum E {
  yes=1,
  no=2
}
console.log(E.yes,E.no);