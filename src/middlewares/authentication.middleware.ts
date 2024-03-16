import { NextFunction, Request, Response } from "express";
import AuthenticationError from "../errors/authentication.error";
import { decodeToken } from "../utils/tokens";
import { AuthenticatedUser } from "../types/token.types";

const expressAuthentication = async (
  request: Request,
  securityName: string,
  scopes?: string[]
): Promise<AuthenticatedUser> => {
  return new Promise((resolve, reject) => {
    const bearer = (request.headers.Authorization ||
      request.headers.authorization ||
      "") as string;
    if (!bearer) {
      reject(new AuthenticationError());
      return;
    }
    const token = bearer.split(" ")[1].trim();
    const authenticatedUser = decodeToken(token);
    resolve(authenticatedUser);
  });
};

const authenticationMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  console.log("======request.headers==", request.headers);
  const bearer = (request.headers.Authorization ||
    request.headers.authorization ||
    "") as string;
  console.log("======bearer==", bearer);
  if (!bearer) {
    request.user = null;
    return next();
  }
  const token = bearer.split(" ")[1].trim();
  console.log("======token==", token);
  const authenticatedUser = decodeToken(token);
  console.log("======authenticatedUser==", authenticatedUser);
  request.user = authenticatedUser;
  next();
};

export { authenticationMiddleware, expressAuthentication };
