export default interface User {
  id: string;
  createdAt?: Date;
  name: string;
  email: string;
  phone_number: string | null;
}
