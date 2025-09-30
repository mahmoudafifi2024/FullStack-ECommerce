// src/utils/jwt.ts
import jwt, { SignOptions } from "jsonwebtoken";

export const signJwt = (
payload: object,
secret: string,
options?: SignOptions
): string => {
return jwt.sign(payload, secret, options);
};

export const verifyJwt = <T = any>(token: string, secret: string): T => {
return jwt.verify(token, secret) as T;
};
