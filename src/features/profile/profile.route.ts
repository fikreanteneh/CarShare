import { Router } from "express";
import { changeCredentials, getProfile, updateApi } from "./profile.controller";
// import { CatchError } from "../middlewares/errorMiddlware";

const router = Router();

router.get("/", getProfile)
router.put("/changeCredentials", changeCredentials)
router.put("/apis", updateApi)



export default router;
