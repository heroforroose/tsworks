/// <reference path = "./interfaces.ts" />
/// <reference types = "axios" />
import { EventEmitter } from "./event_emitter";
import axios from "axios";
/**
 * model decortor
 * @param serviceUrl 
 */
function ModelSettings(serviceUrl : string) {
  return function(target : any) {
    // 保存原构造函数的引用
    let original = target;
    function constructor(constructor, args){
      let c : any = function () {
        return constructor.apply(this,args);
      }
      c.prototype = constructor.prototype;
      let instance = new c();
      instance._serviceUrl = serviceUrl;
      return instance;
    }
    // 新构造函数行为
    let f : any = function (...args) {
      return constructor(original, args);
    }
    // 为了使 instance 操作符继续可用，复制原型
    f.prototype = original.prototype;
    // 返回新的构造函数（将原构造函数覆盖）
    return f;
  }
}
/**
 * model class
 */
class Model extends EventEmitter implements IModel {
  private _serviceUrl : string;
  constructor(mediator : IMediator) {
    super(mediator);
  }
  // 由派生类实现
  public initialize() {
    throw new Error("model.prototype.initialize() is abstract and must implmented ");
  }
  // 由派生类实现
  public dispose(): void {
    throw new Error("model.prototype.dispose() is abstract and mustS implemented.");
  }
  protected requestAsync(method : string ,dataType : string ,data : any){
    return axios.get("http://www.mozila.com");
  }
  protected getAsync(dataType : string, data : any) {
    return this.requestAsync("GET", dataType, data);
  }
  protected postAsync(dataType : string, data : any) {
    return this.requestAsync("POST", dataType, data)
  }
}
export { Model, ModelSettings };