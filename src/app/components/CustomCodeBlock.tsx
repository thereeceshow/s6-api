"use client";
import { FaCopy } from "react-icons/fa";
import { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Tooltip } from "flowbite-react";

export default function CustomCodeBlock() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState("");
  const codeString = "(num) => num + 1";

  useEffect(() => {
    if (copied) {
      setTimeout(() => setCopied(false), 1500);
    }
    if (!copied) {
      setStatus('');
    }
  }, [copied]);

  const copyCode = (e) => {
    console.log(e.target.x, e.target.y);
    navigator.clipboard.writeText(codeString).then(
      () => {
        /* success */
        setStatus("Copied Code to Clipboard");
        setCopied(true);
      },
      () => {
        /* failure */
        setStatus("Copy Failed");
      }
    );
  };

  return (
    <>
      <div className="">
        {/* <Tooltip>{status}</Tooltip> */}
        {/* {copied ? <Tooltip content={status} trigger="click"><FaCopy onClick={copyCode} /></Tooltip> : <FaCopy onClick={copyCode} />} */}
        <div className="flex justify-end relative w-full bg-blue-100 rounded-t-md py-2 pe-3">
          {status && <div className="transition ease-in-out delay-150 absolute -top-1 right-1 z-10 rounded-full border-dashed bg-white/50 border-2 text-slate-600 py-1.5 px-5">
            {status}
          </div>}
          <FaCopy className={status && 'invisible'} onClick={copyCode} />
        </div>
      </div>
      <SyntaxHighlighter language="javascript" style={docco}>
        {codeString}
      </SyntaxHighlighter>
    </>
  );
}
