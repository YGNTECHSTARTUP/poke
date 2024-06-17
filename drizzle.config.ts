import { config } from 'dotenv';
import { defineConfig } from "drizzle-kit";

config({ path: '.env' });

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./src/db",
  dialect: "postgresql",
  dbCredentials: {
    url:'postgresql://pokeguess_owner:hTRKCp0BFLx9@ep-yellow-smoke-a1z5026q.ap-southeast-1.aws.neon.tech/pokeguess?sslmode=require',
  },
});
