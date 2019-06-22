/// <reference path = "./interfaces.ts" />
import { EventEmitter } from "./event_emitter";
import { AppEvent } from "./app_event";
import { Route } from "./route";
import { Router } from "./router";
class Dispatcher extends EventEmitter implements IDispatcher {
  private _controllerHashMap : Object;
  private _currentController : IController;
  private _currentControllerName : string;
  constructor(mediator:IMediator,controllers:IControllerDetails[]){
    super(mediator);
    this._controllerHashMap = this.getController(controllers);
    this._currentController = null;
    this._currentControllerName = null;

  }
  public initialize() {
    this.subscribeToEvents([
      new AppEvent("app.dispatch",null,(e : any,data? : any)=>{
        this.dispatch(data);
      })
    ]);
  }
  private getController(controllers:IControllerDetails[]) : Object{
    let hashMap,hashMapEntry,name,controller,l;
    hashMap = {};
    l = controllers.length;
    if(l <= 0){
      this.triggerEvent(new AppEvent(
        "app.error",
        "cannot ctraeate",
        null
      ));
    }
    for(let i=0; i<l; i++){
      controller = controller[i];
      name = controller.controllerName;
      hashMapEntry = hashMap[name];
      if(hashMapEntry !== null && hashMapEntry !== undefined){
        this.triggerEvent(new AppEvent(
          "app.error",
          "two controller cannot use the same name",
          null
        ));
      }
      hashMap[name] = controller.controller;
    }
    return hashMap;
  }
  private dispatch(route : Route){
    let Controller = this._controllerHashMap[route.controllerName];
    // 试图发现controller
    if(Controller === null || Controller === undefined) {
      this.triggerEvent(new AppEvent(
        "app.error",
        `Controller not found : ${route.controllerName}`,
        null
      ));
    }else{
      let controller : IController = new Controller(this._mediator);
      let a = controller[route.actionName];
      if(a === null || a === undefined) {
        this.triggerEvent(new AppEvent(
          "app.error",
          `Action not found in controller: ${route.controllerName} - + ${route.actionName}`,
          null
        ))
      }else{
        if(this._currentController == null){
          //初始化controller
          this._currentControllerName = route.controllerName;
          this._currentController = controller;
          this._currentController.initialize();
        }else{
          if(this._currentControllerName !== route.controllerName){
            this._currentController.dispose();
            this._currentControllerName = route.controllerName;
            this._currentController = controller;
            this._currentController.initialize();
          }
        }
        // let the stream from debuger passed to controller
        this.triggerEvent(new AppEvent(
          `app.controller.${this._currentControllerName}.${route.actionName}`,
          route.args,
          null
        ));
      }
    }
  }
}
export { Dispatcher }