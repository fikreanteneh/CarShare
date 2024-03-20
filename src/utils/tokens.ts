import jwt from "jsonwebtoken";
import { AuthenticatedOrganizer } from "types/token.types";

export const encodeToken = (payload: any) => {
  const token = jwt.sign(payload, `${process.env.JWT_SECRET}`, {
    expiresIn: `${process.env.JWT_EXPIRATION}`,
  });
  return token;
};

export const decodeToken = (token: string): any => {
  const decoded = jwt.verify(token, `${process.env.JWT_SECRET}`) as any;
  if (!decoded) {
    throw new Error("Invalid token");
  }
  return { id: decoded.id, email: decoded.email };
};
