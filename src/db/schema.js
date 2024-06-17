"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertPokemon = exports.pokemons = void 0;
var pg_core_1 = require("drizzle-orm/pg-core");
exports.pokemons = (0, pg_core_1.pgTable)("pokemons", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    pokeid: (0, pg_core_1.integer)("pokeid").notNull().unique(),
    named: (0, pg_core_1.text)("name").notNull().unique(),
    caughtby: (0, pg_core_1.text)("caughtby").notNull().default("admin"),
    time: (0, pg_core_1.date)("time").defaultNow()
});
exports.InsertPokemon = typeof exports.pokemons.$inferInsert;
