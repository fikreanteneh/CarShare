import { PrismaClient } from "@prisma/client/extension";
import Customer from "../models/user.model";
import Repository from "./generic.repository";

export default class CustomerRepository extends Repository<Customer> {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    super(prisma.events);
    this.prisma = prisma;
  }

  public async getByEmail(email: string): Promise<Customer | null> {
    const record = await this.prisma.users.findFirst({
      where: {
        email: email,
      },
    });
    return record;
  }

  public async getByPhoneNumber(phone_number: string): Promise<Customer | null> {
    const record = await this.prisma.users.findFirst({
      where: {
        phone_number: phone_number,
      },
    });
    return record;
  }
}
