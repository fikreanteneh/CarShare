import CustomError from "./custom.error";

export default class UnknownError extends CustomError {
  constructor(message: string) {
    super("Something Went Wrong", 500);
    Error.captureStackTrace(this, this.constructor);
  }
}
