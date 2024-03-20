import { Body, Post, Route, SuccessResponse, Tags } from "tsoa";
import { db } from "../../config/database";
import { responseHandler } from "../../middlewares/response.middleware";
import OrganizerRepository from "../../repositories/organizer.repository";
import { ResponseSuccessType } from "../../types/request.types";
import OrgAuthServices from "./orgauth.service";
import { OrgAuthLoginRequest, OrgAuthLoginResponse } from "./orgauth.types";

const database = db();

@Tags("Organizer Authentication")
@Route("organizerAuth")
export class OrgAuthRoute {
  @Post("oauth")
  @SuccessResponse("201")
  public async create(
    @Body() requestBody: OrgAuthLoginRequest
  ): Promise<ResponseSuccessType<OrgAuthLoginResponse>> {
    const service = new OrgAuthServices(new OrganizerRepository(database));
    const token = await service.login(requestBody);
    return responseHandler({ token });
  }
}
