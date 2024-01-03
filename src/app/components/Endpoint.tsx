'use client'
import Link from "next/link";
import { FaCopy } from "react-icons/fa";
import { Accordion } from "flowbite-react";
import { usePathname } from "next/navigation";
import CustomCodeBlock from "./CustomCodeBlock";


export default function Endpoint(props: {
  endpoint: string;
  directions: string[];
  docLink: undefined | string;
}) {
  const endpoint = props.endpoint;
  const linkToExternalDocs = props.docLink && <Link className="text-slate-500 underline" href={props.docLink}>External Docs</Link>;
  const directions = props.directions.map((dir, index) => {
    return (
    <div className={`${(props.directions.length > 1) && "mb-2"} px-3`} key={index}>{dir} {linkToExternalDocs}</div>
    );
  });

  return (
    <Accordion collapseAll>
      <Accordion.Panel>
        <Accordion.Title className="text-red-700 text-start">
          {endpoint}
          </Accordion.Title>
          <Accordion.Content>
            {directions}
          </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}
