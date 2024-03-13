import { NextFunction, Request, Response } from "express";
import AuthService from "./profile.service";
import ProfileServices from "./profile.service";

export async function getProfile(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization as string;
    res.status(200).json(await new ProfileServices().getProfile(token));   
}

export async function changeCredentials(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization as string;
    res.status(200).json(await new ProfileServices().changeCredentials(token));   
}

export async function updateApi(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization as string;
    res.status(200).json(await new ProfileServices().updateApi(token, req.body));   
}
