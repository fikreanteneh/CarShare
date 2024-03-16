import CustomError from "./custom.error";

export default class AuthorizationError extends CustomError {
  public status: number;
  constructor() {
    super("Unauthorized Access", 401);
    this.status = 401;
    Error.captureStackTrace(this, this.constructor);
  }
}
