/// <reference path = "./interfaces.ts" />

import { EventEmitter } from "./event_emitter";
import { AppEvent } from "./app_event";
import { Route } from "./route";

/**
 * Router class
 */
class Router extends EventEmitter implements IRouter {
  private _defaultController : string;
  private _defaultAction : string;
  constructor(mediator : IMediator, defaultController : string, defaultAction : string){
    super(mediator);
    this._defaultController = defaultController || "home";
    this._defaultAction = defaultAction || "index";
  }
  public initialize() : void {
    let window : any;   //类似DOM
    window.on("hashchange",() => {
      let r = this.getRoute();
      this.onRouteChange(r);
    });
    this.subscribeToEvents([
      new AppEvent("app.initialize",null,(e : any,data ?: any) => {
        this.onRouteChange(this.getRoute());
      }),
      new AppEvent("app.route",null,(e:any,data?:any) => {
        this.setRoute(data);
      })
    ]);
  }
  subscribeToEvents(arg : AppEvent[]) {
    throw new Error("Method not implemented.");
  }
  protected getRoute() {
    let h = window.location.hash;
    return this.parseRoute(h);
  }
  private setRoute(route : Route) {
    let s = route.serialize();
    window.location.hash = s ;
  }
  private parseRoute(hash : string) {
    let comp, controller, action, args, i;
    if(hash[hash.length - 1] === "/"){
      hash = hash.substring(0, hash.length - 1);
    }
    comp = hash.replace("#",'').split('/');
    controller = comp[1] || this._defaultController;
    action = comp[1] || this._defaultAction;
    args = [];
    for(let i=2;i<comp.length;i++){
      args.push(comp[i]);
    }
    return new Route(controller,action,args);
  }
  private onRouteChange(route : Route) {
    this.triggerEvent(new AppEvent("app.dispatch",route,null));
  }
}
export { Router }
