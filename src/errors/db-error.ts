import { custErr } from "./custErr";
export class DbError extends custErr {
  public statusCode = 500;
  constructor() {
    super("DB connection error");
    // only because we are extending a build in class
    Object.setPrototypeOf(this, DbError.prototype);
  }
  serializeError() {
    return [{ message: "Db connection issues" }];
  }
}
