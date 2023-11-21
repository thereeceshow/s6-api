import Link from "next/link";

export default function Endpoint(props: {
  endpoint: string;
  directions: string[];
  docLink: undefined | string;
}) {
  const endpoint = props.endpoint;
  const linkToExternalDocs = props.docLink && <Link href={props.docLink}>External Docs</Link>;
  const directions = props.directions.map((dir, index) => {
    return (
    <div key={index}>{dir} {linkToExternalDocs}</div>
    );
  });


  return (
    <div className="">
      <div className="m-5 p-2 border-2 rounded-lg border-black border-dotted">
        {directions}
        <div className="bg-white border-2 border-black rounded-lg ps-3 pe-8 py-1 mt-2 text-start -mx-8">
          <div className="text-red-700 text-start">{endpoint}</div>
        </div>
        <div>
          <Link href={`.${endpoint}`}>Example Here</Link>
        </div>
      </div>
    </div>
  );
}
