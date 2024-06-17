"use server"
import { db } from "@/db/drizzle";
import { pokemons } from "@/db/schema";
import random from "../../../utils/actions/random";

interface InsertPokeParams {
  name: string;
  pokeid: number;
  person: string;
}
async function poke({ name, pokeid, person }: InsertPokeParams) {
 const res = db.insert(pokemons).values({
    named:name,
    pokeid:pokeid,
    caughtby:person
  })
  return res;
}

export  async function insertpoke({ name, pokeid, person }: InsertPokeParams) {
  
   const result = await poke({name,person,pokeid})
   console.log(result)
   random()
  } 
