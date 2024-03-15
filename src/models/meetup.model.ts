export default interface Meetup {
  id: string;
  createdAt?: Date;
  client_id: string;
  client_secret: string;
  organizer_id?: string;
  name: string;
  organizer?: {
    connect: {
      id: string;
    };
  };
}
