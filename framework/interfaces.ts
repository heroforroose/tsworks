interface IAppEvent {
  topic : string;
  data : any;
  handler : (e : any,data : any) => void;
}
/**
 * 中介器
 */
interface IMediator {
  publish : (e : IAppEvent) => void;
  subscribe : (e : IAppEvent) => void;
  unsubscribe : (e : IAppEvent) => void;
}
/**
 * 程序组件
 */
interface IAppSettings {
  isDebug : boolean,
  defaultController : string;
  defaultAction : string;
  controllers : Array<IControllerDetails>;
  onErrorHandler : (o : Object) => void;
}
interface IControllerDetails {
  controllerName : string;
  controller : { new(...args : any[]) : any ;};
}
/**
 * 路由表
 */
interface IRoute {
  controllerName : string;
  actionName : string;
  args : Object[];
  serialize():string;
}
/**
 * event_emitter 接口
 */
interface IEventerEmitter {
  triggerEvent(event : IAppEvent):any;
  subscribeToEvents(events : Array<IAppEvent>):any;
  unsubscribeToEvents(events : Array<IAppEvent>):any;
}
/**
 * router 路由
 */
interface IRouter extends IEventerEmitter {
  initialize() : void;
}
/**
 * 调度器
 */
interface IDispatcher extends IEventerEmitter {
  initialize() : void;
}