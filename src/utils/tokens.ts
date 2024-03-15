import jwt from "jsonwebtoken";
import { AuthenticatedUser } from "types/token.types";

export const encodeToken = (payload: AuthenticatedUser) => {
  const token = jwt.sign(payload, `${process.env.JWT_SECRET}`, {
    expiresIn: `${process.env.JWT_EXPIRATION}`,
  });
  return token
};

export const decodeToken = (token: string): AuthenticatedUser => {
  const decoded = jwt.verify(token, `${process.env.JWT_SECRET}`) as AuthenticatedUser;
  if (!decoded) {
    throw new Error("Invalid token");
  }
  return decoded;
};
