/// <reference path = "./interfaces.ts" />
import { EventEMitter } from "./event_emitter";
import { AppEvent } from "./app_event";
import { Route } from "./route";
class Dispatcher extends EventEMitter implements IDispatcher {
  private _controllerHashMap : Object;
  private _currentController : IControllerDetails;
  private _currentAction : string;
  constructor(mediator:IMediator,controllers:IControllerDetails[]){
    super();
    this._controllerHashMap = this.getController(controllers);
    this._currentController = null;
    this._currentAction = null;

  }
  public initialize() {
    this.subscribeToEvents([
      new AppEvent("app.dispatch",null,(e:any,data?:any)=>{
        this.dispatch(data);
      })
    ]);
  }
  private getController(controllers:IControllerDetails[]) : Object{
    let hashMap,hashMapEntry,name,controller,l;
    hashMap = {};
    l=controllers.length;
    if(l<=0){
      this.triggerEvent(new AppEvent(
        "app.error",
        "cannot ctraeate",
        null
      ));
      for(let i=0;i<l;i++){
        controller = controller[i];
        name = controller.controllerName;
        hashMapEntry = hashMap[name];
        if(hashMapEntry !==null && hashMapEntry !==undefined){
          this.triggerEvent(new AppEvent(
            "app.error",
            "controller not found",
            null
          ));
        }else{
          controller: IController = new controller(this._mediator);
          let a = controller[Route.actionName];
          if(a===null || a===undefined){
            this.triggerEvent(new AppEvent(
              "app.error",
              "action not found",
              null
            ));

          }else{
            if(this._currentController == null){
              this._currentControllerName = Route.ControllerName;
              this._currentController = controller;
              this._currentController.initialize();
            }
          }
          this.triggerEvent(new AppEvent(
            `app.controller.$(this._currentCOntrollerName).${this.route.actionName}`
            Route.arguments,
            null
          ));
        }
      }
    }
  }
}
export { Dispatcher }