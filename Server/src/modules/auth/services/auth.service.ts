// src/modules/auth/services/auth.service.ts
import { User } from "../models/user.model.js";
import type { RegisterPayload, RegisterResponse } from "../dtos/auth.dto.js";
import { hashPassword } from "../../../utils/hash.js";
import { signJwt } from "../../../utils/jwt.js";
import { ENV } from "../../../config/env.js";

export const registerUser = async (
payload: RegisterPayload
): Promise<RegisterResponse> => {
const { name, email, password } = payload;

// Email uniqueness
const existing = await User.findOne({ email });
if (existing) {
    throw new Error("Email already registered");
}

// Hash password (using util)
const hashed = await hashPassword(password);

// Save user
const user = await User.create({
    name,
    email,
    password: hashed,
});

// Create token payload and sign
const token = signJwt(
    { userId: String(user._id), email: user.email },
    ENV.JWT_SECRET,
    { expiresIn:  Number(ENV.JWT_EXPIRES_IN) }
);

return {
    id: String(user._id),
    name: user.name as string,
    email: user.email as string,
    token,
};
};
