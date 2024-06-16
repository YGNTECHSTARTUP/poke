import { config } from "dotenv";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
config({path:'.env'})
export const sql = neon("postgresql://neondb_owner:cdE9yRws1Onu@ep-summer-king-a5s14l2z.us-east-2.aws.neon.tech/neondb?sslmode=require")
export const db = drizzle(sql,{schema})