// src/modules/auth/controllers/auth.controller.ts
// src/modules/auth/controllers/auth.controller.ts
import { Request, Response } from "express";
import { registerUser } from "../services/auth.service.js";

export const register = async (req: Request, res: Response) => {
try {
    const result = await registerUser(req.body);

    // optionally set httpOnly cookie for the token
    if (result.token) {
    res.cookie("token", result.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days (match JWT_EXPIRES_IN if desired)
    });
    }

    // return created user (without password) and token
    return res.status(201).json({
    id: result.id,
    name: result.name,
    email: result.email,
    token: result.token, // you can omit this if you prefer cookie-only auth
    });
} catch (err: any) {
    return res.status(400).json({ message: err.message });
}
};
