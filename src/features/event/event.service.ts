import * as uuidd from "uuid";
import Event from "../../models/event.model";
import EventRepository from "../../repositories/events.repository";
import { AuthenticatedOrganizer } from "../../types/token.types";
import {
  EventCreateRequest,
  EventUpdateNameRequest as EventUpdateRequest,
} from "./event.types";

export default class EventServices {
  private eventRepository: EventRepository;

  constructor(eventRepository: EventRepository) {
    this.eventRepository = eventRepository;
  }

  async createEvent(payload: EventCreateRequest, user: AuthenticatedOrganizer) {
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
      },
    });
  }

  async updateEvent(
    id: string,
    payload: EventUpdateRequest,
    user: AuthenticatedOrganizer
  ) {
    const event = (await this.eventRepository.getById(id)) as unknown as Event;
    // TODO: Implement Validation
    return await this.eventRepository.update(id, {
      id: id,
      lat: payload.lat,
      long: payload.long,
      name: payload.name,
      date: payload.date,
    });
  }

  async deleteEvent(id: string, user: AuthenticatedOrganizer) {
    // TODO: Implement Validation
    return await this.eventRepository.delete(id);
  }

  async getEventById(id: string, user: AuthenticatedOrganizer) {
    // TODO: Implement Validation
    return await this.eventRepository.getById(id);
  }

  async getEventByOrganizer(organizerid: string, user: AuthenticatedOrganizer) {
    // TODO: Implement Validation
    return await this.eventRepository.getEventsByOrganizerId(organizerid);
  }

  async getAllEvents(user: AuthenticatedOrganizer) {
    // TODO: Implement Validation
    return await this.eventRepository.getAll();
  }
}
