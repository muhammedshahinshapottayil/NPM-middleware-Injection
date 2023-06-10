export abstract class custErr extends Error {
  abstract statusCode: number;
  abstract serializeError(): { message: string; field?: string }[];
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, custErr.prototype);
  }
}
