import { decodeToken } from "../../utils/tokens";
import * as uuidd from "uuid";
import { db } from "../../config/database";

export default class ProfileServices {
  async getProfile(token: string) {
    const { id, email } = decodeToken(token) as any;
    const res = await db().organizer.findFirst({
      where: { id },
    });
    return res;
  }

  async changeCredentials(token: string) {
    const { id, email } = decodeToken(token) as any;
    const prisma = db();
    const organizer = await prisma.organizer.findFirst({
      where: { id: id },
    });
    const newCLientId = uuidd.v4();
    const newClientSecret = uuidd.v4();
    const updatedOrganizer = await prisma.organizer.update({
      where: { id: id },
      data: {
        client_id: newCLientId,
        client_secret: newClientSecret,
      },
    });
  }

  async updateApi(token: string, body: any) {
    const { id, email } = decodeToken(token) as any;
    const prisma = db();
    const organizer = await prisma.organizer.findFirst({
      where: { id: id },
    });
    const updatedOrganizer = await prisma.organizer.update({
      where: { id: id },
      data: {
        meetup_api: body.meetup_api,
      },
    });
  }
}
