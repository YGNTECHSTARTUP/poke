import { date, integer, pgTable, serial, text } from "drizzle-orm/pg-core";

export const pokemons = pgTable("pokemons",{
    id:serial("id").primaryKey(),
    pokeid:integer("pokeid").notNull().unique(),
    named:text("name").notNull().unique(),
    caughtby:text("caughtby"),
    time:date("time").defaultNow()
})

export const InsertPokemon = typeof pokemons.$inferInsert
