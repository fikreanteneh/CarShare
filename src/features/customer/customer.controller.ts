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
import { db } from "../../config/database";
import { responseHandler } from "../../middlewares/response.middleware";
import Event from "../../models/event.model";
import User from "../../models/user.model";
import CustomerRepository from "../../repositories/customer.repository";
import { ResponseSuccessType } from "../../types/request.types";
import CustomerServices from "./customer.service";
import {
  CustomerCreateRequest,
  CustomerUpdateNameRequest,
} from "./customer.types";

const database = db();

@Tags("User Services")
@Route("users")
@Security("BearerAuth")
export class CustomerController {
  @Post("/")
  public async createUser(
    @Request() request: ERequest,
    @Body() requestBody: CustomerCreateRequest
  ): Promise<ResponseSuccessType<Event>> {
    const service = new CustomerServices(new CustomerRepository(database));
    const response = await service.createUser(requestBody, request.user as any);
    return responseHandler(response);
  }

  @Delete("{id}")
  public async deleteUser(
    @Path() id: string,
    @Request() request: ERequest
  ): Promise<ResponseSuccessType<Event>> {
    const service = new CustomerServices(new CustomerRepository(database));
    const response = await service.deleteUser(id, request.user as any);
    return responseHandler(response);
  }

  @Put("updateName/{id}")
  public async updateName(
    @Path() id: string,
    @Body() requestBody: CustomerUpdateNameRequest,
    @Request() request: ERequest
  ): Promise<ResponseSuccessType<User | null>> {
    const service = new CustomerServices(new CustomerRepository(database));
    const response = await service.updateName(
      id,
      requestBody,
      request.user as any
    );
    return responseHandler(response);
  }

  @Put("updateEmail/{id}")
  public async updateEmail(
    @Path() id: string,
    @Body() requestBody: CustomerUpdateNameRequest,
    @Request() request: ERequest
  ): Promise<ResponseSuccessType<User | null>> {
    const service = new CustomerServices(new CustomerRepository(database));
    const response = await service.updateName(
      id,
      requestBody,
      request.user as any
    );
    return responseHandler(response);
  }
  @Put("updatePhoneNumber/{id}")
  public async updatePhoneNumber(
    @Path() id: string,
    @Body() requestBody: CustomerUpdateNameRequest,
    @Request() request: ERequest
  ): Promise<ResponseSuccessType<User | null>> {
    const service = new CustomerServices(new CustomerRepository(database));
    const response = await service.updateName(
      id,
      requestBody,
      request.user as any
    );
    return responseHandler(response);
  }

  @Get("{id}")
  public async getUserById(
    @Path() id: string,
    @Request() request: ERequest
  ): Promise<ResponseSuccessType<User>> {
    const service = new CustomerServices(new CustomerRepository(database));
    const response = await service.getUserById(id, request.user as any);
    return responseHandler(response);
  }

  @Get("")
  public async getAll(
    @Request() request: ERequest
  ): Promise<ResponseSuccessType<User[]>> {
    const service = new CustomerServices(new CustomerRepository(database));
    const response = await service.getAllUsers(request.user as any);
    return responseHandler(response);
  }
}
