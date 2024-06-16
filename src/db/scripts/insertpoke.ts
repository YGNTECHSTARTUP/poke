import { db } from "@/db/drizzle"
import { pokemons } from "@/db/schema"
export default async function insertpoke({name,pokeid}:{name:string,pokeid:number}) {
   await db.insert(pokemons).values([{
    named: name,
    pokeid: pokeid
   }])
}
