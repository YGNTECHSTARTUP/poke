import { db } from "../drizzle";
import { pokemons } from "../schema";

export const deletepoke = async () => {
    await db.delete(pokemons)
}
deletepoke()