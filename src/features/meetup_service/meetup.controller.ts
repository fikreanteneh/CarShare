import { NextFunction, Request, Response } from "express";
import MeetupRepository from "../../repositories/meetup.repository";
import { db } from "../../config/database";
import MeetupServices from "./meetup.service";

const database = db();

export const createMeetup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const service = new MeetupServices(new MeetupRepository(database));
  const result = await service.createMeetup(req.body.data, req.body.user);
  return result;
};

export const updateCredintials = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const service = new MeetupServices(new MeetupRepository(database));
  const id = req.params.id;
  const result = await service.updateCredintials({ id }, req.body.user);
  return result;
};

export const updateName = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const service = new MeetupServices(new MeetupRepository(database));
  const id = req.params.id;
  const result = await service.updateName({ ...req.body.data, id }, req.body.user);
  return result;
};

export const deleteMeetup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const service = new MeetupServices(new MeetupRepository(database));
  const id = req.params.id;
  const result = await service.deleteMeetup({ id }, req.body.user);
  return result;
};

export const getMeetupByOrganizer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const service = new MeetupServices(new MeetupRepository(database));
  const id = req.params.id;
  const result = await service.getMeetupByOrganizer(id, req.body.user);
  return result;
};

export const getMeetupById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const service = new MeetupServices(new MeetupRepository(database));
  const id = req.params.id;
  const result = await service.getMeetupById(id, req.body.user);
  return result;
};

export const getAllMeetups = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const service = new MeetupServices(new MeetupRepository(database));
  const id = req.params.id;
  const result = await service.getAllMeetups(req.body.user);
  return result;
};
