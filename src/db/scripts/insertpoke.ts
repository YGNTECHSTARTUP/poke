import { db } from "@/db/drizzle";
import { pokemons } from "@/db/schema";

interface InsertPokeParams {
  name: string;
  pokeid: number;
  person: string;
}

export default async function insertpoke({ name, pokeid, person }: InsertPokeParams) {
  
    await db.insert(pokemons).values([{
      named: name,
      pokeid: pokeid,
      caughtby: person || "--",
    }]);
  } 
