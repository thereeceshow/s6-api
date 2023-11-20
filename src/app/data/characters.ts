// import { NextResponse } from "next/server";

export default function characters() {
  const data = {
    characters: [
      {
        id: 1,
        first_name: "Solid",
        last_name: "Snake",
        video_games: [
          "Metal Gear Solid",
          "Metal Gear Solid 2: Sons of Liberty",
          "Metal Gear Solid 3: Snake Eater",
        ],
        abilities: ["Stealth", "Marksmanship", "Hand-to-hand combat"],
        relationships: ["Big Boss", "Otacon"],
        bio: "Solid Snake, also known as David, is a legendary soldier and spy. He has faced numerous threats to global security, often using his exceptional combat and stealth skills. Created as a clone of Big Boss, Snake has a complicated relationship with his origin and has played a pivotal role in preventing catastrophic events.",
      },
      {
        id: 2,
        first_name: "Lara",
        last_name: "Croft",
        video_games: [
          "Tomb Raider",
          "Rise of the Tomb Raider",
          "Shadow of the Tomb Raider",
        ],
        abilities: ["Archaeology", "Athletics", "Combat proficiency"],
        relationships: ["Jonah Maiava", "Ana"],
        bio: "Lara Croft is an adventurous archaeologist with a knack for getting into dangerous situations. Known for her intelligence and agility, Lara travels the world in search of ancient artifacts. She is driven by a desire for discovery and often finds herself entangled in conflicts with rival treasure hunters and secret organizations.",
      },
      {
        id: 3,
        first_name: "Geralt",
        last_name: "of Rivia",
        video_games: [
          "The Witcher",
          "The Witcher 2: Assassins of Kings",
          "The Witcher 3: Wild Hunt",
        ],
        abilities: ["Witcher signs", "Swordsmanship", "Alchemy"],
        relationships: ["Yennefer", "Ciri"],
        bio: "Geralt of Rivia, a monster hunter for hire, is a mutated and highly skilled warrior known as a Witcher. With his silver sword and magical abilities, Geralt navigates a morally gray world, dealing with political intrigues and supernatural threats. His relationships with Yennefer and Ciri add depth to his character as he searches for his own identity in a turbulent world.",
      },
      {
        id: 4,
        first_name: "Master",
        last_name: "Chief",
        video_games: ["Halo: Combat Evolved", "Halo 2", "Halo 3"],
        abilities: [
          "Combat training",
          "Leadership",
          "Advanced armor technology",
        ],
        relationships: ["Cortana", "Arbiter"],
        bio: "Master Chief, a Spartan supersoldier, is humanity's greatest defender against the alien Covenant. Clad in the iconic MJOLNIR armor, Chief has participated in pivotal battles and displayed exceptional combat prowess. His bond with the AI Cortana and uneasy alliances with the Arbiter highlight the human side of this silent protagonist.",
      },
      {
        id: 5,
        first_name: "Ezio",
        last_name: "Auditore",
        video_games: [
          "Assassin's Creed II",
          "Assassin's Creed Brotherhood",
          "Assassin's Creed Revelations",
        ],
        abilities: ["Parkour", "Stealth", "Assassination techniques"],
        relationships: ["Leonardo da Vinci", "Caterina Sforza"],
        bio: "Ezio Auditore, a Renaissance-era assassin, seeks vengeance against those who wronged his family. As a master of the Assassin Brotherhood, Ezio's journey spans decades and multiple cities. His alliances with historical figures like Leonardo da Vinci and romantic entanglements with individuals such as Caterina Sforza shape his character.",
      },
      {
        id: 6,
        first_name: "Aloy",
        last_name: null,
        video_games: ["Horizon Zero Dawn", "Horizon Forbidden West"],
        abilities: ["Archery", "Survival skills", "Machine control"],
        relationships: ["Varl", "Sylens"],
        bio: "Aloy, a skilled hunter and archer, is the protagonist of the post-apocalyptic world of Horizon Zero Dawn. Raised as an outcast, Aloy's journey is marked by discovery and the unraveling of the mysteries surrounding the robotic creatures and the ancient technology that now populates her world.",
      },
      {
        id: 7,
        first_name: "Nathan",
        last_name: "Drake",
        video_games: [
          "Uncharted: Drake's Fortune",
          "Uncharted 2: Among Thieves",
          "Uncharted 3: Drake's Deception",
        ],
        abilities: [
          "Climbing",
          "Hand-to-hand combat",
          "Archaeological knowledge",
        ],
        relationships: ["Elena Fisher", "Sully"],
        bio: "Nathan Drake, a charismatic treasure hunter, embarks on perilous adventures in search of lost artifacts. Known for his wit and resourcefulness, Drake faces ancient mysteries and modern-day mercenaries. His relationships with Elena Fisher and mentor Sully add depth to his character as he navigates danger with a grin.",
      },
      {
        id: 8,
        first_name: "Commander",
        last_name: "Shepard",
        video_games: ["Mass Effect", "Mass Effect 2", "Mass Effect 3"],
        abilities: ["Leadership", "Biotic powers", "Combat proficiency"],
        relationships: ["Liara T'Soni", "Garrus Vakarian"],
        bio: "Commander Shepard, a human Spectre, is the central figure in the battle against the Reapers. With the fate of the galaxy at stake, Shepard commands the Normandy and forms alliances with diverse species. The choices made by players shape Shepard's personality and determine the outcome of the epic struggle.",
      },
      {
        id: 9,
        first_name: "Link",
        last_name: null,
        video_games: [
          "The Legend of Zelda: Ocarina of Time",
          "The Legend of Zelda: Breath of the Wild",
          "The Legend of Zelda: Twilight Princess",
        ],
        abilities: ["Swordsmanship", "Archery", "Magic"],
        relationships: ["Princess Zelda", "Navi"],
        bio: "Link, the hero of Hyrule, embarks on epic quests to thwart the plans of Ganon and save Princess Zelda. With the Master Sword in hand, Link travels through time and dimensions, facing puzzles and battles. Link's bond with Princess Zelda and the guidance of fairy companions like Navi showcase the courage and determination of this iconic character.",
      },
      {
        id: 10,
        first_name: "Commander",
        last_name: "Ryder",
        video_games: ["Mass Effect: Andromeda"],
        abilities: ["Tech skills", "Biotic powers", "Leadership"],
        relationships: ["Cora Harper", "Peebee"],
        bio: "Commander Ryder, a Pathfinder in the Andromeda Initiative, leads humanity's exploration of the Andromeda galaxy. Faced with new challenges and mysteries, Ryder must navigate political tensions and the threat of an ancient alien race. Relationships with crew members, such as Cora Harper and Peebee, add emotional depth to Ryder's journey.",
      },
      {
        id: 11,
        first_name: "Kratos",
        last_name: null,
        video_games: ["God of War (2018)"],
        abilities: ["God-like strength", "Axe combat", "Wrestling with gods"],
        relationships: ["Atreus", "Mimir"],
        bio: "Kratos, the Ghost of Sparta, seeks redemption in a new land and with a new family. Set in the world of Norse mythology, Kratos battles both gods and monsters while mentoring his son, Atreus. The emotional depth and growth of Kratos, as well as his interactions with characters like Mimir, redefine the iconic character from his earlier Greek adventures.",
      },
    ],
  };

//   return NextResponse.json(data);
return data;
}
