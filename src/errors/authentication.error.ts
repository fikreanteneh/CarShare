import CustomError from "./custom.error";

export default class AuthenticationError extends CustomError {
  constructor() {
    super("Unauthenticated User", 403);
    Error.captureStackTrace(this, this.constructor);
  }
}
