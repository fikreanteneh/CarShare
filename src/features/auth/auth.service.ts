import Organizer from "models/organizer.model";
import OrganizerRepository from "repositories/organizer.repository";
import * as uuidd from "uuid";
import { decodeToken, encodeToken } from "../../utils/tokens";
import { AuthLoginRequest, GoogleOauthResponse } from "./auth.types";

export default class AuthServices {
  private organizerRepository: OrganizerRepository;

  constructor(organizerRepository: OrganizerRepository) {
    this.organizerRepository = organizerRepository;
  }

  async login(payload: AuthLoginRequest) {
    const access_token = payload.access_token;
    const response = await fetch(
      `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${access_token}`,
      { method: "GET" }
    );
    const data = (await response.json()) as GoogleOauthResponse;
    let organizer = await this.organizerRepository.getByEmail(`${data.email}`);
    if (!organizer) {
      const organizerId = uuidd.v4();
      organizer = await this.organizerRepository.create({
        id: organizerId,
        name: data.name,
        email: data.email,
      });
    }
    organizer = organizer as Organizer;

    const token = encodeToken({
      id: organizer.id,
      email: organizer.email,
    });
    return token;
  }

  // async validateToken(token: string): Promise<boolean | undefined> {
  //   const decoded = decodeToken(token);
  //   if (!decoded) {
  //     return;
  //   }
  //   const organizer = await prisma.organizers.findFirst({
  //     where: { id: decoded.id },
  //   });
  //   if (!organizer) {
  //     return false;
  //   }
  //   return true;
  // }
}
