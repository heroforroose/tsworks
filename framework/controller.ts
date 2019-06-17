/// <reference path = "./interfaces.ts" />
import { EventEmitter } from "./event_emitter";
import { AppEvent } from "./app_event";

class Controller extends EventEmitter implements IController {
  constructor(mediator : IMediator){
    super(mediator);
  }
  initialize(): void {
    throw new Error("çontroller.protype.initialize() is abstract you must implements it!");
  }
  dispose(): void {
    throw new Error("Method not implemented.");
  }
}
export { Controller };