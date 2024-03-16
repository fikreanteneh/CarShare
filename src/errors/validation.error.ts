import CustomError from "./custom.error";

export default class ValidationError extends CustomError {
  constructor(message: string) {
    super(message, 400);
    Error.captureStackTrace(this, this.constructor);
  }
}
