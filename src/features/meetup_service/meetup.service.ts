import Meetup from "models/meetup.model";
import MeetupRepository from "repositories/meetup.repository";
import { AuthenticatedUser } from "types/token.types";
import * as uuidd from "uuid";
import { MeetupCreateRequest, MeetupUpdateNameRequest } from "./meetup.types";

export default class MeetupServices {
  private meetupRepository: MeetupRepository;

  constructor(meetupRepository: MeetupRepository) {
    this.meetupRepository = meetupRepository;
  }

  async createMeetup(payload: MeetupCreateRequest, user: AuthenticatedUser) {
    const id = uuidd.v4();
    const client_id = uuidd.v4();
    const client_secret = uuidd.v4();
    return await this.meetupRepository.create({
      id,
      client_id,
      client_secret,
      // organizer_id: user.id,
      name: payload.name,
      organizer: {
        connect: {
          id: user.id,
        },
      },
    });
  }

  async updateCredintials(id: string, user: AuthenticatedUser) {
    const meetup = (await this.meetupRepository.getById(id)) as Meetup;
    // TODO: Implement Validation
    const client_id = uuidd.v4();
    const client_secret = uuidd.v4();
    return await this.meetupRepository.update(id, {
      ...meetup,
      client_id,
      client_secret,
    });
  }

  async updateName(
    id: string,
    payload: MeetupUpdateNameRequest,
    user: AuthenticatedUser
  ) {
    const meetup = (await this.meetupRepository.getById(id)) as Meetup;
    // TODO: Implement Validation
    return await this.meetupRepository.update(id, {
      ...meetup,
      name: payload.name,
    });
  }

  async deleteMeetup(id: string, user: AuthenticatedUser) {
    // TODO: Implement Validation
    return await this.meetupRepository.delete(id);
  }

  async getMeetupById(id: string, user: AuthenticatedUser) {
    // TODO: Implement Validation
    return await this.meetupRepository.getById(id);
  }

  async getMeetupByOrganizer(organizerid: string, user: AuthenticatedUser) {
    // TODO: Implement Validation
    return await this.meetupRepository.getMeetupsByOrganizerId(organizerid);
  }

  async getAllMeetups(user: AuthenticatedUser) {
    // TODO: Implement Validation
    return await this.meetupRepository.getAll();
  }
}
