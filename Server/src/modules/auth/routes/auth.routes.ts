// src/modules/auth/routes/auth.routes.ts
import { Router } from "express";

import { register } from "../controllers/auth.controller.js";
import { validate } from "../../../middlewares/validate.js";
import { registerSchema } from "../validators/user.validator.js";

const router = Router();

// POST /api/auth/register
router.post("/register", validate(registerSchema), register);

export default router;
