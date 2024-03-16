import { Body, Post, Route, SuccessResponse, Tags } from "tsoa";
import { db } from "../../config/database";
import { responseHandler } from "../../middlewares/response.middleware";
import OrganizerRepository from "../../repositories/organizer.repository";
import { ResponseSuccessType } from "../../types/request.types";
import AuthServices from "./auth.service";
import { AuthLoginRequest, AuthLoginResponse } from "./auth.types";

const database = db();

@Tags("Authentication")
@Route("auth")
export class AuthRoute {
  @Post("oauth")
  @SuccessResponse("201")
  public async create(
    @Body() requestBody: AuthLoginRequest
  ): Promise<ResponseSuccessType<AuthLoginResponse>> {
    const service = new AuthServices(new OrganizerRepository(database));
    const token = await service.login(requestBody);
    return responseHandler({ token });
  }
}
