import { Request as ERequest } from "express";
import {
  Body,
  Delete,
  Get,
  Path,
  Post,
  Put,
  Request,
  Route,
  Security,
  Tags,
} from "tsoa";
import { AuthenticatedOrganizer } from "types/token.types";
import { db } from "../../config/database";
import { responseHandler } from "../../middlewares/response.middleware";
import Meetup from "../../models/meetup.model";
import MeetupRepository from "../../repositories/meetup.repository";
import { ResponseSuccessType } from "../../types/request.types";
import MeetupServices from "./meetup.service";
import { MeetupCreateRequest, MeetupUpdateNameRequest } from "./meetup.types";

const database = db();

@Tags("Meetup Services")
@Route("meetups")
@Security("BearerAuth")
export class MeetupController {
  @Post("/")
  public async createMeetup(
    @Request() request: ERequest,
    @Body() requestBody: MeetupCreateRequest
  ): Promise<ResponseSuccessType<Meetup>> {
    const service = new MeetupServices(new MeetupRepository(database));
    const result = await service.createMeetup(
      requestBody,
      request.user as AuthenticatedOrganizer
    );
    return responseHandler(result);
  }

  @Put("/credentials/{id}")
  public async updateCredentials(
    @Path() id: string,
    @Request() request: ERequest
  ): Promise<ResponseSuccessType<any>> {
    const service = new MeetupServices(new MeetupRepository(database));
    const result = await service.updateCredintials(
      id,
      request.user as AuthenticatedOrganizer
    );
    return responseHandler(result);
  }

  @Put("/name/{id}")
  public async updateName(
    @Path() id: string,
    @Body() requestBody: MeetupUpdateNameRequest,
    @Request() request: ERequest
  ): Promise<ResponseSuccessType<any>> {
    const service = new MeetupServices(new MeetupRepository(database));
    const result = await service.updateName(
      id,
      requestBody,
      request.user as AuthenticatedOrganizer
    );
    return responseHandler(result);
  }

  @Delete("{id}")
  public async deleteMeetup(
    @Path() id: string,
    @Request() request: ERequest
  ): Promise<ResponseSuccessType<Meetup>> {
    const service = new MeetupServices(new MeetupRepository(database));
    const result = await service.deleteMeetup(
      id,
      request.user as AuthenticatedOrganizer
    );
    return responseHandler(result);
  }

  @Get("/organizer/{id}")
  public async getMeetupByOrganizer(
    @Path() id: string,
    @Request() request: ERequest
  ): Promise<ResponseSuccessType<Meetup[]>> {
    const service = new MeetupServices(new MeetupRepository(database));
    const result = await service.getMeetupByOrganizer(
      id,
      request.user as AuthenticatedOrganizer
    );
    return responseHandler(result);
  }

  @Get("/{id}")
  public async getMeetupById(
    @Path() id: string,
    @Request() request: ERequest
  ): Promise<ResponseSuccessType<Meetup>> {
    const service = new MeetupServices(new MeetupRepository(database));
    const result = await service.getMeetupById(
      id,
      request.user as AuthenticatedOrganizer
    );
    return responseHandler(result);
  }

  @Get("/all")
  public async getAllMeetups(
    @Request() request: ERequest
  ): Promise<ResponseSuccessType<Meetup[]>> {
    const service = new MeetupServices(new MeetupRepository(database));
    const result = await service.getAllMeetups(
      request.user as AuthenticatedOrganizer
    );
    return responseHandler(result);
  }
}
