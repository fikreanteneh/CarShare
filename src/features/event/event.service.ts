import Meetup from "../../models/meetup.model";
import EventRepository from "../../repositories/events.repository";
import { AuthenticatedUser } from "../../types/token.types";
import * as uuidd from "uuid";
import { EventCreateRequest, EventUpdateNameRequest as EventUpdateRequest } from "./event.types";
import Event from "../../models/event.model"

export default class EventServices {
  private eventRepository: EventRepository;

  constructor(eventRepository: EventRepository) {
    this.eventRepository = eventRepository;
  }

  async createEvent(payload: EventCreateRequest, user: AuthenticatedUser) {
    return await this.eventRepository.create({
      id: uuidd.v4(),
      lat: payload.lat,
      long: payload.long,
      name: payload.name,
      date: payload.date,
      organizer: {
        connect: {
          id: user.id,
        },
      }
    });
  }

  async updateEvent(
    payload: EventUpdateRequest,
    user: AuthenticatedUser
  ) {
    const event = (await this.eventRepository.getById(payload.id)) as unknown as Event;
    // TODO: Implement Validation
    return await this.eventRepository.update(payload.id, {
      id: payload.id,
      lat: payload.lat,
      long: payload.long,
      name: payload.name,
      date: payload.date,
    });
  }


  async deleteEvent(payload: string, user: AuthenticatedUser) {
    // TODO: Implement Validation
    return await this.eventRepository.delete(payload);
  }

  async getEventById(id: string, user: AuthenticatedUser) {
    // TODO: Implement Validation
    return await this.eventRepository.getById(id);
  }

  async getEventByOrganizer(organizerid: string, user: AuthenticatedUser) {
    // TODO: Implement Validation
    return await this.eventRepository.getEventsByOrganizerId(organizerid);
  }

  async getAllEvents(user: AuthenticatedUser) {
    // TODO: Implement Validation
    return await this.eventRepository.getAll();
  }
}
