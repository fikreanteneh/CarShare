import { NextFunction, Request, Response } from "express";
import { db } from "../../config/database";
import EventRepository from "../../repositories/events.repository";
import EventService from "./event.service";

const database = db();

export async function createEvent(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const service = new EventService(new EventRepository(database));
  return await service.createEvent(req.body.data, req.body.user);
}

export async function deleteEvent(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const service = new EventService(new EventRepository(database));
  return await service.deleteEvent(req.params.id, req.body.user);
}

export async function updateEvent(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const service = new EventService(new EventRepository(database));
  const id = req.params.id;
  return await service.updateEvent({ ...req.body.data, id }, req.body.user);
}
export async function getEventByOrganizer(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const service = new EventService(new EventRepository(database));
  return await service.getEventByOrganizer(req.params.id, req.body.user);
}

export async function getAllEvents(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const service = new EventService(new EventRepository(database));
  return await service.getAllEvents(req.body.user);
}

export async function getEventById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const service = new EventService(new EventRepository(database));
  return await service.getEventById(req.params.id, req.body.user);
}
