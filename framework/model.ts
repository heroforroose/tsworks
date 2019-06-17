/// <reference path = "./interfaces.ts" />
import { EventEmitter } from "./event_emitter";
import { resolve } from "dns";
/**
 * decortor
 * @param serviceUrl 
 */
function ModelSettings(serviceUrl : string) {
  return function(target : any) {
    let original = target;
    function constructor(constructor, args){
      let c : any = function () {
        return constructor.apply(this,args);
      }
      c.prototype = constructor.prototype;
      let instance = new c();
      instance.serviceUrl = serviceUrl;
      return instance;
    }
    // 新构造函数行为
    let f : any = function (...args){
      return construct(original, args);
    }
    // 为了使 instance 操作符继续可用，复制原型
    f.prototype = original.prototype;
    // 返回新的构造函数（将原构造函数覆盖）
    return f;
  }
}

@ModelSettings("data/test.json")
class Model extends EventEmitter implements IModel {
  private _serviceUrl : string;
  constructor(mediator : IMediator) {
    super(mediator);
  }
  public initialize() {
    throw new Error("initialize ");
  }
  public dispose(): void {
    throw new Error("Method not implemented.");
  }
  protected requestAsync(Method:string,dataType:string,data : any){
    
  }
  protected getAsync(){}
  protected postAsync(){}
}
export { Model, ModelSettings };