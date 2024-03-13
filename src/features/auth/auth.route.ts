import { Router } from "express";
import { oauth } from "./auth.controller";
// import { CatchError } from "../middlewares/errorMiddlware";

const authRoute = Router();

authRoute.post("/oauth", oauth);
authRoute.put("/changeCredentials")


export default authRoute;
