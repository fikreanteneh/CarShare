import { Request } from "express";
import { decodeToken } from "../utils/tokens";

// export const authenticationMidleware = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const token = req.headers.authorization;
//   if (token) {
//     const authenticatedUser = decodeToken(token);
//     req.user = authenticatedUser;
//   }
//   next();
// };
const expressAuthenticationRecasted = (
  request: Request,
  securityName: string,
  scopes?: string[]
) => {
  const token = request.headers.authorization;
  if (token) {
    const authenticatedUser = decodeToken(token);
    request.user = authenticatedUser;
  } else {
    request.user = null;
  }
};

export { expressAuthenticationRecasted };
