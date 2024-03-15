import { PrismaClient } from "@prisma/client/extension";
import Organizer from "models/organizer.model";
import Repository from "./generic.repository";

export default class OrganizerRepository extends Repository<Organizer> {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    super(prisma.organizers);
    this.prisma = prisma;
  }

  async getByEmail(email: string): Promise<Organizer | null>{
    return await this.model.findFirst({
      where: {
        email: email,
      },
    });
  }
}
