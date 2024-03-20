import User from "models/user.model";
import * as uuidd from "uuid";
import CustomerRepository from "../../repositories/customer.repository";
import { AuthenticatedCustomer } from "../../types/token.types";
import {
  CustomerCreateRequest,
  CustomerUpdateEmailRequest,
  CustomerUpdateNameRequest,
  CustomerUpdatePhoneNumberRequest,
} from "./customer.types";

export default class CustomerServices {
  private userRepository: CustomerRepository;
  constructor(userRepository: CustomerRepository) {
    this.userRepository = userRepository;
  }

  async createUser(
    payload: CustomerCreateRequest,
    user: AuthenticatedCustomer
  ) {
    const prevCustomer = await this.userRepository.getByEmail(payload.email);
    if (prevCustomer) {
      return prevCustomer;
    }
    return await this.userRepository.create({
      id: uuidd.v4(),
      name: payload.name,
      email: payload.email,
      phone_number: payload.phone_number,
    });
  }

  async updateEmail(
    id: string,
    payload: CustomerUpdateEmailRequest,
    user: AuthenticatedCustomer
  ) {
    const customer = (await this.userRepository.getById(id)) as unknown as User;
    // TODO: Implement Validation
    return await this.userRepository.update(id, {
      id: id,
      name: customer.name,
      email: payload.email,
      phone_number: customer.phone_number,
    });
  }
  async updatePhoneNumber(
    id: string,
    payload: CustomerUpdatePhoneNumberRequest,
    user: AuthenticatedCustomer
  ) {
    const customer = (await this.userRepository.getById(id)) as unknown as User;
    // TODO: Implement Validation
    return await this.userRepository.update(id, {
      id: id,
      name: customer.name,
      email: customer.email,
      phone_number: payload.phone_number,
    });
  }

  async updateName(
    id: string,
    payload: CustomerUpdateNameRequest,
    user: AuthenticatedCustomer
  ) {
    const customer = (await this.userRepository.getById(id)) as unknown as User;
    // TODO: Implement Validation
    return await this.userRepository.update(id, {
      id: id,
      name: payload.name,
      email: customer.email,
      phone_number: customer.phone_number,
    });
  }

  async deleteUser(id: string, user: AuthenticatedCustomer) {
    // TODO: Implement Validation
    return await this.userRepository.delete(id);
  }

  async getUserById(id: string, user: AuthenticatedCustomer) {
    // TODO: Implement Validation
    return await this.userRepository.getById(id);
  }

  async getAllUsers(user: AuthenticatedCustomer) {
    // TODO: Implement Validation
    return await this.userRepository.getAll();
  }
}
