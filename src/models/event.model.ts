export default interface Event {
  id: string;
  createdAt?: Date;
  organizer_id?: string;
  name: string;
  date: Date;
  lat: number;
  long: number;
  organizer?: {
    connect: {
      id: string;
    };
  };
}
