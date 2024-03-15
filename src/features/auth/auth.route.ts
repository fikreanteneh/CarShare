import { Router } from "express";
import { controllerHandler } from "../../middlewares/controller.middleware";
import { oauth } from "./auth.controller";

const authRoute = Router();

/**
 * @openapi
 * /oauth:
 *   post:
 *     summary: OAuth endpoint
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
authRoute.post("/oauth", controllerHandler(oauth));

export default authRoute;
