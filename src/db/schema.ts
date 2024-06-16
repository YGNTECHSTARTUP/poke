import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";

export const pokemons = pgTable("pokemons",{
    id:serial("id").primaryKey(),
    pokeid:integer("pokeid").notNull(),
    named:text("name").notNull()
})

export const InsertPokemon = typeof pokemons.$inferInsert
