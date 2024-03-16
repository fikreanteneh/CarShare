import { AuthenticatedUser } from "./token.types";

declare global {
  namespace Express {
    interface Request {
      user: AuthenticatedUser | null; // or the type of your user
    }
  }
}

export type RequestType<T> = {
  data: T;
  user?: AuthenticatedUser;
};

export type ResponseSuccessType<T> = {
  success: boolean;
  response: T;
  error: null;
};

export type ResponseErrorType = {
  success: boolean;
  response: null;
  error: string;
};
