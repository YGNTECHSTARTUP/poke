ALTER TABLE "pokemons" ADD COLUMN "caughtby" text NOT NULL;--> statement-breakpoint
ALTER TABLE "pokemons" ADD COLUMN "time" date DEFAULT now();--> statement-breakpoint
ALTER TABLE "pokemons" ADD CONSTRAINT "pokemons_pokeid_unique" UNIQUE("pokeid");--> statement-breakpoint
ALTER TABLE "pokemons" ADD CONSTRAINT "pokemons_name_unique" UNIQUE("name");