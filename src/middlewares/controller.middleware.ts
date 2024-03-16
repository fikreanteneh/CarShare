
import { Request, Response, NextFunction } from "express";
import { responseHandler } from "./response.middleware";

export const controllerHandler =
  (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await fn(req, res, next);
      return responseHandler(req, res, result);
    } catch (err) {
      next(err);
    }
    };
  
