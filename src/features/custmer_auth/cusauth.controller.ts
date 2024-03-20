import { Body, Post, Route, SuccessResponse, Tags } from "tsoa";
import { db } from "../../config/database";
import { responseHandler } from "../../middlewares/response.middleware";
import CustomerRepository from "../../repositories/customer.repository";
import MeetupRepository from "../../repositories/meetup.repository";
import { ResponseSuccessType } from "../../types/request.types";
import CusAuthServices from "./cusauth.service";
import {
  CusAuthCheckResponse,
  CusAuthLoginRequest,
  CusAuthLoginResponse,
} from "./cusauth.types";

const database = db();

@Tags("Customer Authentication")
@Route("customerAuth")
export class CusAuthRoute {
  @Post("auth")
  @SuccessResponse("201")
  public async create(
    @Body() requestBody: CusAuthLoginRequest
  ): Promise<ResponseSuccessType<CusAuthLoginResponse>> {
    const service = new CusAuthServices(
      new MeetupRepository(database),
      new CustomerRepository(database)
    );
    const token = await service.login(requestBody);
    return responseHandler({ token });
  }
  @Post("exist")
  @SuccessResponse("201")
  public async exist(
    @Body() requestBody: CusAuthLoginRequest
  ): Promise<ResponseSuccessType<CusAuthCheckResponse>> {
    const service = new CusAuthServices(
      new MeetupRepository(database),
      new CustomerRepository(database)
    );
    const exist = await service.login(requestBody);
    return responseHandler({ exist });
  }
}
