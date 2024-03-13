import { NextFunction, Request, Response } from "express";
import AuthService from "./auth.service";

export async function oauth(req: Request, res: Response, next: NextFunction) {
    const service = new AuthService()
    const access_token = req.body.access_token;
    const token_type = req.body.token_type;
    const expires_in = +req.body.expires_in;
    const token = await service.login(req.body)
    console.log("=======", token)
    return res.status(200).json({token})

    
}
