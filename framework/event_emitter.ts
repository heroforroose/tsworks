/// <reference path = "./interfaces.ts" />
class EventEmitter implements IEventerEmitter {
  protected _mediator : IMediator;
  protected _events : Array<IAppEvent>;

  constructor(mediator : IMediator) {
    this._mediator = mediator;
  }
  public triggerEvent(event: IAppEvent) {
    this._mediator.publish(event);
  }
  public subscribeToEvents(events: Array<IAppEvent>) {
    this._events = events;
    for(let i = 0; i < this._events.length; i++){
      this._mediator.subscribe(this._events[i]);
    }
  }
  public unsubscribeToEvents() {
    for(let i = 0; i < this._events.length; i++){
      this._mediator.unsubscribe(this._events[i]);
    }
  }
}
export { EventEmitter };