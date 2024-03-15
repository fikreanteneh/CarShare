import { PrismaClient } from "@prisma/client/extension";
import Repository from "./generic.repository";
import Event from "../models/event.model";

export default class EventRepository extends Repository<Event> {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    super(prisma.events);
    this.prisma = prisma;
  }

  public async getEventsByOrganizerId(id: string): Promise<Event[]> {
    const records = await this.prisma.events.findMany({
      where: {
        organizer: {
          id: id,
        },
      },
    });
    return records;
  }

  public async getEventsByMeetupId(id: string): Promise<Event[]> {
    const records = await this.prisma.events.findMany({
      where: {
        meetup: {
          id: id,
        },
      },
    });
    return records;
  }

}
