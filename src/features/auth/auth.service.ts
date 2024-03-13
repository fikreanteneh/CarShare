import * as uuidd from "uuid";
import { db } from "../../config/database";
import { encodeToken } from "../../utils/tokens";

export default class AuthServices {
  async login(body: any) {
    const access_token = body.access_token;
    const token_type = body.token_type;
    const expires_in = +body.expires_in;
    const response = await fetch(
      `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${access_token}`,
      { method: "GET" }
    );
    const data = await response.json();

    const prisma = db();

    const organizer = await prisma.organizer.findFirst({
      where: { email: data.email },
    });
    console.log(organizer)
    if (organizer) {
      const token = encodeToken({ id: organizer.id, email: organizer.email });
      console.log(token)
      return token;
    }

    const organizerId = uuidd.v4();
    const clientId = uuidd.v4();
    const clientSecret = uuidd.v4();
    const organizerCreated = await prisma.organizer.create({
      data: {
        id: organizerId,
        email: data.email,
        name: data.name,
        client_id: clientId,
        client_secret: clientSecret,
        meetup_api: false,
      },
    });

    const token = encodeToken({
      id: organizerCreated.id,
      email: organizerCreated.email,
    });
    return token ;
  }
}
