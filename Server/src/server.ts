// src/server.ts
import app from "./app.js";
import { connectDB } from "./config/db.js";
import { ENV } from "./config/env.js";

const start = async () => {
  await connectDB();

  app.listen(ENV.PORT, () => {
    console.log(`🚀 Server running on http://localhost:${ENV.PORT}`);
  });
};

start();
