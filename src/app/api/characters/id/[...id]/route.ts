import { NextResponse } from "next/server";
import characters from "@/app/data/characters";

export async function GET(
  req: Request,
  { params }: { params: { id: string[] } }
) {
  interface GameCharacter {
    id: number;
    first_name: string;
    last_name: string | null;
    video_games: string[];
    abilities: string[];
    relationships: string[];
    bio: string;
  }

  interface GameCharacterList {
    characters: GameCharacter[];
  }

  interface Error {
    error: string;
  }

  const charactersList: GameCharacterList = characters();

  const splitString = (stringToSplit: string, separator: string) => {
    return stringToSplit.split(separator);
  };

//   const regex = /[^\w\s']/g;
  const comma = ','

  const decode = (str: string) => {
    const sep = str[str.search(comma)];
    return splitString(str, sep);
  };

  let decodeParams: string[] = [];

  for (const el of params.id) {
    const tempArr = decode(el);
    for (const tempEl of tempArr) {
        decodeParams.push(tempEl)
    }
  }

  decodeParams = decodeParams.flat(Infinity);

  const errors: Error[] = [];

  const makeNumberArray = (arr: string[]) => {
    const numArr: Number[] = [];
    for (const el of arr) {
      if (Number(el)) {
        numArr.push(Number(el));
      }
      if (el.split("-").length === 2) {
        // console.log(el.split("-"));
        const newRange = el.split("-");
        const start: number = Number(newRange[0]);
        const end: number = Number(newRange[1]);
        if (start && end)
          for (let i = start; i <= end; i++) {
            numArr.push(i);
          }
      }
      else if (!Number(el)) {
        errors.push({error: `${el} is not a valid ID`});
      }
    }
    return numArr;
  };

  const id: Number[] = Array.from(new Set(makeNumberArray(decodeParams)));

//   id = Array.from(new Set(id));

  const data = id.map((el) => {
    // console.log("el ", typeof el);
    const entry = charactersList.characters.filter(
      (char) => char.id === Number(el)
    );
    return entry[0]
      ? entry
      : { id: el, Error: `No Characters with an ID of ${el} exist` };
  });

  return NextResponse.json({ data, errors });
}
