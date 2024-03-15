import { NextFunction, Request, Response } from "express";
import { decodeToken } from "../utils/tokens";

export const authenticationMidleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;
  if (token) {
    const authenticatedUser = decodeToken(token);
    req.body.user = authenticatedUser;
  }
  next();
};
