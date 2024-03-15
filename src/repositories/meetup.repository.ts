import { PrismaClient } from "@prisma/client/extension";
import Meetup from "models/meetup.model";
import Repository from "./generic.repository";

export default class MeetupRepository extends Repository<Meetup> {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    super(prisma.meetup_api_services);
    this.prisma = prisma;
  }

  async getMeetupsByOrganizerId(organizer_id: string) {
    return this.model.findMany({
      where: {
        organizer_id: organizer_id,
      },
    });
  }
}
