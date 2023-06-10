import { ValidationError } from "express-validator";
import { custErr } from "./custErr";
export class ReqValidationerr extends custErr {
  public statusCode = 400;
  constructor(public error: ValidationError[]) {
    super("Invalid Request Parameters");
    // only because we are extending a build in class
    Object.setPrototypeOf(this, ReqValidationerr.prototype);
  }
  serializeError() {
    return this.error.map(({ msg, type, path }: any) => {
      if (type === "field") {
        return { message: msg, field: path };
      }
      return { message: msg };
    });
  }
}
