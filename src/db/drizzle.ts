import { config } from "dotenv";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
config({path:'.env'})
export const sql = neon('postgresql://pokeguess_owner:hTRKCp0BFLx9@ep-yellow-smoke-a1z5026q.ap-southeast-1.aws.neon.tech/pokeguess?sslmode=require')
export const db = drizzle(sql,{schema})