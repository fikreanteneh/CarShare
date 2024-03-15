import { Router } from "express";
import { controllerHandler } from "../../middlewares/controller.middleware";
import {
  createEvent,
  deleteEvent,
  getAllEvents,
  getEventById,
  getEventByOrganizer,
  updateEvent,
} from "./event.controller";

const eventRouter = Router();




/**
 * @openapi
 * /oauth:
 *   post:
 *     summary: Meetup API Service Genarate endpoint
 *     description: This endpoint is used for OAuth.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               data:
 *                 type: object
 *                 properties:
 *                   access_token:
 *                     type: string
 *                     description: The access token From Your Auth Provider.
 *                   token_type:
 *                     type: string
 *                     description: The type of the token.
 *                   expires_in:
 *                     type: integer
 *                     description: The expiration time of the token in seconds.
 * 
 *     responses:
 *       201:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 access_token:
 *                   type: string
 */
eventRouter.post("/", controllerHandler(createEvent));
eventRouter.delete("/:id", controllerHandler(deleteEvent));
eventRouter.put("/:id", controllerHandler(updateEvent));
eventRouter.get("/organizer/:id", controllerHandler(getEventByOrganizer));
eventRouter.get("/all", controllerHandler(getAllEvents));
eventRouter.get("/:id", controllerHandler(getEventById));

export default eventRouter;
