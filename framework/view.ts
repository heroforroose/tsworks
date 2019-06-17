/// <reference path = "./interfaces.ts" />
import { EventEmitter } from "./event_emitter";
import { AppEvent } from "./app_event";
function ViewSettings(templateUrl : string,container : string){
  return function(target : any){
    let original = target;
    function construct(constructor,args){
      let c:any = function(){
        return constructor.apply(this,args);
      }
      c.prototype = constructor.prototype;
      let instance = new c();
      instance._container = container;
      instance._templateUrl = templateUrl;
      return instance;
    }
    // 新的构造函数行为
    let f : any = function(...args:any[]){
      return construct(original,args);
    }
    // 为了使新的构造函数instancof操作符继续可用，复制原型
    f.prototype = original.prototype
    // 返回新的构造函数
    return f;
  }
}
@ViewSettings("templateUrl","#container")
class View extends EventEmitter implements IView {
  protected _container : string;
  protected _templateUrl : string;
  private _templateDelegate : any  //所使用模板
  constructor(mediator : IMediator){
    super(mediator);
  }
  public initialize(): void {
    throw new Error("Method not implemented.");
  }  
  public dispose(): void {
    throw new Error("Method not implemented.");
  }
  protected bindDomEvents(model:any){
    throw new Error("----");
  }
  protected unbindDomEvens(model:any){
    throw new Error("----");
  }
  // 异步加载模板
  private loadTemplateAsync(){
    // 请求模板
  }
  // 异步编译模板
  private compileTemplateAsync(source : string){

  }
  //若操作未完成异步加载和编译模板
  private getTemplateAsync(){

  }
  // 渲染view
  protected renderAsync(){

  } 
}
export { View ,ViewSettings};