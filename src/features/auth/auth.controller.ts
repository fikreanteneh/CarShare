import { NextFunction, Request, Response } from "express";
import { db } from "../../config/database";
import OrganizerRepository from "../../repositories/organizer.repository";
import AuthService from "./auth.service";

const database = db();

export async function oauth(req: Request, res: Response, next: NextFunction) {
  const service = new AuthService(new OrganizerRepository(database));
  const token = await service.login(req.body.data);
  return res.status(200).json({ token });
}
