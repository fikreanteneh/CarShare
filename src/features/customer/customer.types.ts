export type CustomerCreateRequest = {
  name: string;
  email: string;
  phone_number: string | null;
};

export type CustomerUpdateNameRequest = {
  name: string;
};
export type CustomerUpdatePhoneNumberRequest = {
  phone_number: string;
};
export type CustomerUpdateEmailRequest = {
  email: string;
};

export type CustomerResponse = {
  id: string;
  name: string;
  email: Date;
  phone_number: string | null;
};

// type MeetupUpdateNameResponse = {

// }

// type MeetupUpdateCreditialsResponse = {

// }

// type MeetupDeleteResponse = {

// }
