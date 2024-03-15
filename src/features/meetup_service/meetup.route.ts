import { Router } from "express";
import { controllerHandler } from "../../middlewares/controller.middleware";
import {
  createMeetup,
  deleteMeetup,
  getAllMeetups,
  getMeetupById,
  getMeetupByOrganizer,
  updateCredintials,
  updateName,
} from "./meetup.controller";

const meetupRouter = Router();

meetupRouter.post("/", controllerHandler(createMeetup));
meetupRouter.put("/credentials/:id", controllerHandler(updateCredintials));
meetupRouter.put("/name/:id", controllerHandler(updateName));
meetupRouter.delete("/:id", controllerHandler(deleteMeetup));
meetupRouter.get("/organizer/:id", controllerHandler(getMeetupByOrganizer));
meetupRouter.get("/all", controllerHandler(getAllMeetups));
meetupRouter.get("/:id", controllerHandler(getMeetupById));

export default meetupRouter;
