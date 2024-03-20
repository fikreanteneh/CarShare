import MeetupRepository from "repositories/meetup.repository";
import CustomerRepository from "../../repositories/customer.repository";
import { encodeToken } from "../../utils/tokens";
import { CusAuthLoginRequest } from "./cusauth.types";

export default class CusAuthServices {
  private meetupRepository: MeetupRepository;
  private userRepository: CustomerRepository;

  constructor(
    meetupRepository: MeetupRepository,
    userRepository: CustomerRepository
  ) {
    this.meetupRepository = meetupRepository;
    this.userRepository = userRepository;
  }

  async login(payload: CusAuthLoginRequest): Promise<string> {
    const meetup = await this.meetupRepository.getMeetupByClient(
      payload.client_id
    );
    const customer = await this.userRepository.getByEmail(payload.email);
    //TODO: Validate Client ID and Client Secret
    if (!customer) throw new Error("Invalid Client ID or Client Secret");
    return encodeToken({
      id: customer.id,
      email: customer.email,
      organizer_id: meetup.organizer_id,
    });
  }
  async exist(payload: CusAuthLoginRequest): Promise<boolean> {
    const meetup = await this.meetupRepository.getMeetupByClient(
      payload.client_id
    );
    const customer = await this.userRepository.getByEmail(payload.email);
    //TODO: Validate Client ID and Client Secret
    if (!customer) return false;
    return true;
  }
}
