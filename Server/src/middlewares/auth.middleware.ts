// src/middlewares/auth.middleware.ts
// simple middleware to protect routes (reads token from header or cookie)
import { Request, Response, NextFunction } from "express";
import { verifyJwt } from "../utils/jwt.js";
import { ENV } from "../config/env.js";

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
try {
    const authHeader = req.headers.authorization;
    const token =
    authHeader?.startsWith("Bearer ") ? authHeader.split(" ")[1] : req.cookies?.token;

    if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
    }

    const payload = verifyJwt<{ userId: string; email?: string }>(token, ENV.JWT_SECRET);
    // attach minimal info
    (req as any).user = { id: payload.userId, email: payload.email };
    return next();
} catch (error: any) {
    return res.status(401).json({ message: "Invalid or expired token" });
}
};
