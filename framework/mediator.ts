/// <reference path = "./interfaces.ts" />
import EventEmitter = require('events');
class Mediator implements IMediator {
  /**
   * 元素对象
   */
  private _$ : any;
  /**
   * @boolen
   */
  private _isDebug : boolean;
  public myEventEmitter = new EventEmitter();
  constructor(isDebug : boolean = false){
    this._$ = "";
    this._isDebug = isDebug;
  }
  /**
   * 发布触发事件
   * @param e 应用事件
   */
  public publish (e: IAppEvent) : void {
    if(this._isDebug === true) {
      console.log(new Date().getTime(),"PUBLICSH", e.topic, e.data);
    }
    this.myEventEmitter.emit(e.topic,e.data);
  };
  /**
   * 订阅绑定事件
   * @param e 
   */
  public subscribe (e: IAppEvent) : void {
    if(this._isDebug === true) {
      console.log(new Date().getTime(),"SUBSCRIBE", e.topic, e.data);
    }
    this.myEventEmitter.on(e.topic,e.data);
  };
  /**
   * 取消 绑定事件
   * @param e 
   */
  public unsubscribe (e: IAppEvent) : void {
    if(this._isDebug === true) {
      console.log(new Date().getTime(),"UNSUBSCRIBE", e.topic, e.data);
    }
    this.myEventEmitter.off(e.topic,e.data);
  };
}
export { Mediator };