import { NextFunction, Request, Response } from "express";
import AuthService from "./auth.service";

export async function oauth(req: Request, res: Response, next: NextFunction) {
    const access_token = req.body.access_token;
    const token_type = req.body.token_type;
    const expires_in = +req.body.expires_in;

    res.status(200).json(await new AuthService().login(req.body));
    
}
