export type EventCreateRequest = {
  name: string;
  date: Date;
  lat: number;
  long: number;
};

export type EventUpdateNameRequest = {
  name: string;
  date: Date;
  lat: number;
  long: number;
};

// export type EventDeleteRequest = {
//   id: string;
// };

export type EventResponse = {
  id: string;
  name: string;
  date: Date;
  lat: number;
  long: number;
  organizer_id: string;
};

// type MeetupUpdateNameResponse = {

// }

// type MeetupUpdateCreditialsResponse = {

// }

// type MeetupDeleteResponse = {

// }
