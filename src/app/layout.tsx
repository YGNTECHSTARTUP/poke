import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";


const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "PokiGuess",
  description: "Pokeguess is a guessing game where you need to guess the correct name of a Pokémon to catch it.

",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={pressStart2P.className}>{children}</body>
    </html>
  );
}
