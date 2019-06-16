/// <reference path = "./interfaces.ts" />
/**
 * route
 */
class Route implements IRoute {
  public controllerName: string;  
  public actionName: string;
  public args: Object[];
  public serialize(): string {
    let s,sargs;
    sargs = this.args.map(a => a.toString()).join("/");
    s = `${this.controllerName}/${this.actionName}/${sargs}`;
    return s;
  }
  constructor(controllerName : string, actionName : string, args : Object[]) {
    this.controllerName = controllerName;
    this.actionName = actionName;
    this.args = args;
  }  
}
export { Route };