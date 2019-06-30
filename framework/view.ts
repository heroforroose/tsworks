/// <reference path = "./interfaces.ts" />
import { EventEmitter } from "./event_emitter";
/**
 * view 装饰器
 * @param templateUrl string
 * @param container string
 */
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
/**
 * view class
 */
class View extends EventEmitter implements IView {
  protected _container : string;
  protected _templateUrl : string;
  private _templateDelegate : any  //所使用模板
  constructor(mediator : IMediator){
    super(mediator);
  }
  public initialize(): void {
    throw new Error("view.prototype.initialize() is abstract and must implemented.");
  }  
  public dispose(): void {
    throw new Error("view.prototype.dispose() is abstract and must implemented.");
  }
  protected bindDomEvents(model : any){
    throw new Error("view.prototype.bindDomEvents() is abstract and must implemented.");
  }
  protected unbindDomEvens(model : any){
    throw new Error("view.prototype.unbindDomEvents() is abstract and must implemented.");
  }
  // 异步加载模板
  private loadTemplateAsync(){
    // 请求模板
    return new Promise((resolve,reject) => {
      
    });
  }
  // 异步编译模板
  private compileTemplateAsync(source : string){
    return new Promise((reject,resolve) => {
      // let template : string = HandleBar.compile(source);
    });
  }
  //若操作未完成异步加载和编译模板
  private getTemplateAsync(){
    return new Promise((reject,resolve) => {

    })
  }
  // 渲染渲染一个view
  protected renderAsync(){
    return new Promise((reject,resolve) => {
      
    })
  } 
}
export { View ,ViewSettings};