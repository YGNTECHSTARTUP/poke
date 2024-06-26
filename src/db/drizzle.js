"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.sql = void 0;
var dotenv_1 = require("dotenv");
var serverless_1 = require("@neondatabase/serverless");
var neon_http_1 = require("drizzle-orm/neon-http");
var schema = require("./schema");
(0, dotenv_1.config)({ path: '.env' });
exports.sql = (0, serverless_1.neon)(process.env.DATABASE_URL);
exports.db = (0, neon_http_1.drizzle)(exports.sql, { schema: schema });
