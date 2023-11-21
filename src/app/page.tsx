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
      directions: [
        "Returns Data object that is an object of a video game character's properties:",
        "name: string",
        "species: string",
        "videoGames: [array]",
        "home: string",
        "skills: [array]"
      ],
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
        "placeholder for directions lskfjasd;lfjasdlf;j adsfdsajf;ldfj aj;l",
      ],
    },
    {
      endpoint: "/api/characters",
      directions: [
        "placeholder for directions lskfjasd;lfjasdlf;j adsfdsajf;ldfj aj;l",
      ],
    },
    {
      endpoint: "/api/headers",
      directions: [
        "placeholder for directions lskfjasd;lfjasdlf;j adsfdsajf;ldfj aj;l",
      ],
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      Available Routes
      <div className="mt-5 w-full md:w-1/2">
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
