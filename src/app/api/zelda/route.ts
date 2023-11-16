import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    name: "Zelda",
    species: "Hylian",
    videoGames: [
      "The Legend of Zelda",
      "Zelda II: The Adventure of Link",
      "A Link to the Past",
      "Ocarina of TIme",
      "Majora's Mask",
      "Oracle of Seasons and Ages",
      "Four Swords",
      "Wind Waker",
      "Four Swords Adventures",
      "The Minish Cap",
      "Twilight Princess",
      "Phantom Hourglass",
      "Spirit Tracks",
      "Skyward Sword",
      "A Link Between Worlds",
      "Breath of the Wild",
      "Tears of the Kingdom",
      "Super Smash Bros.",
      "Super Smash Bros. Melee",
      "Super Smash Bros. Brawl",
      "Super Smash Bros. for 3DS",
      "Super Smash Bros. for Wii U",
      "Super Smash Bros. Ultimate",
      "Cadence of Hyrule",
      "Hyrule Warriors",
      "Hyrule Warriors Legends",
      "Faces of Evil",
      "Zelda: The Wand of Gamelon",
      "Zelda's Adventure",
      "Hyrule Warriors: Age of Calamity",
    ],
    home: "Hyrule",
    skills: [
      "Sword Fighting",
      "Archery",
      "Wisdom",
      { magic: ["Healing", "Precognition", "Teleportation"] },
    ],
  };
  return NextResponse.json({ data });
}
