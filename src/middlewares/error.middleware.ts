import { NextFunction, Request, Response } from "express";

export const errorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err);
  let finalResponse = {
    sucess: false,
    error: err.message,
    response: null,
  };
  res.status(500).json(finalResponse);
};

export const catchError =
  (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
