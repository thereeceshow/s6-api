import Endpoint from "./components/Endpoint";
import Link from "next/link";

export default function Home() {
  const endpoints = [
    {
      endpoint: "/api/single",
      directions: ["Returns Data object with a String"],
    },
    {
      endpoint: "/api/array",
      directions: ["Returns Data object with an Array of Characters"],
    },
    {
      endpoint: "/api/zelda",
      directions: ["Returns Data object that is an object of a video game character's properties:"],
    },
    {
      endpoint: "/api/fake-weather",
      directions: [
        `See for docs`,
      ],
      docLink: 'https://openweathermap.org/current'
    },
    {
      endpoint: "/api/url-key",
      directions: [
        "Passing a key value in the url string is a simple way to keep unauthorized access to the API's data.  This is not very secure, but it will protect your data from accidental leaks",
        "The key in the Replit instructions",
      ],
    },
    {
      endpoint: "/api/characters",
      directions: [
        "Get all characters, some characters, or a single character by ID",
        "• api/characters/id/1 -> Solid Snake",
        "• api/characters/id/1-3 -> Solid Snake, Lara Croft, Geralt of Rivia",
        "• api/characters/id/1,3 -> Solid Snake Geralt of Rivia",
        "• Single number for one character.",
        "• Use a - to get all characters in range",
        "• Use a , to get specific characters by id",
      ],
    },
    {
      endpoint: "/api/headers",
      directions: [
        "A more secure way to pass this is going to be to send it in the headers.",
        "How to use Headers:",
      ],
      docLink: 'https://developer.mozilla.org/en-US/docs/Web/API/Headers'
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      Available Routes
      <div className="mt-5 w-full md:w-1/2 rounded-lg space-y-3">
        {endpoints.map((el, index) => {
          return (
            <Endpoint
              endpoint={el.endpoint}
              directions={el.directions}
              docLink={el.docLink || undefined}
              key={index}
            />
          );
        })}
      </div>
    </main>
  );
}
