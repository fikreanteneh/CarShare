export type AuthenticatedOrganizer = {
  id: string;
  email: string;
};



export type AuthenticatedCustomer = {
    id: string;
    email: string;
    organizer_id: string;
}