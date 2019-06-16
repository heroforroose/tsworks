/// <reference path = "./interfaces.ts" />

import { EventEmitter } from "./event_emitter";
import { AppEvent } from "./app_event";
import { Route } from "./route";
import { parse } from "path";
import { Hash } from "crypto";

class Router extends EventEmitter implements IRouter {
  private _defaultController : string;
  private _defaultAction : string;
  constructor(mediator : IMediator, defaultController : string, defaultAction : string){
    super(mediator);
    this._defaultController = defaultController || "home";
    this._defaultAction = defaultAction || "index";
  }
  initialize(): void {
    let window:any;   //类似DOM
    window.on("hashchange",() => {
      let r = this.getRoute();
      this.onRouteChange(r);
    });
    this.subscribeToEvents([
      new AppEvent("app.initialize",null,(e:any,data?:any) => {
        this.onRouteChange(this.getRoute());
      }),
      new AppEvent("app.route",null,(e:any,data?:any) => {
        this.setRoute(data);
      })
    ]);
  }
  subscribeToEvents(arg0: AppEvent[]) {
    throw new Error("Method not implemented.");
  }
  private getRoute() {
    let h = window.location.hash;
    return this.parseRoute(h);
  }
  private setRoute() {

  }
  private parseRoute(h: string) {
    let comp, controller, action, args, i;
    if(h[h.length - 1] === "/"){
      h = h.substring(0, h.length - 1);
    }
    comp = h.replace("#",'').split('/');
    controller = comp[1] || this._defaultController;
    action = comp[1] || this._defaultAction;
    args = [];
    for(let i=2;i<comp.length;i++){
      args.push(comp[i]);
    }
    return new Route(controller,action,args);
  }
  private onRouteChange(r: void) {
    this.triggerEvent(new AppEvent("app.dispatch",Route,null));
  }
  private triggerEvent(event: IAppEvent) {
    throw new Error("Method not implemented.");
  }
  private unsubscribeToEvents(events: IAppEvent[]) {
    throw new Error("Method not implemented.");
  }
  
}
export {Router}
