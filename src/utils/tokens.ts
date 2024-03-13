import jwt from "jsonwebtoken";

export const encodeToken = (payload: any) => {
  const token = jwt.sign(payload, `${process.env.JWT_SECRET}`, {
    expiresIn: `${process.env.JWT_EXPIRATION}`,
  });
  return token
  console.log(payload, token, process.env.JWT_SECRET);
};

export const decodeToken = (token: string) => {
  const decoded = jwt.verify(token, `${process.env.JWT_SECRET}`);
  if (!decoded) {
    throw new Error("Invalid token");
  }
  return decoded;
};
