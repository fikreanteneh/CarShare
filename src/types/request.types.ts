import { AuthenticatedOrganizer } from "./token.types";

declare global {
  namespace Express {
    interface Request {
      user: AuthenticatedOrganizer | null; // or the type of your user
    }
  }
}

export type RequestType<T> = {
  data: T;
  user?: AuthenticatedOrganizer;
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
