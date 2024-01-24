"use client";

import { useState } from "react";

export default function Page() {
  // interface video {
  //   loomEmbed: string;
  //   loomLink: string;
  //   height: number;
  //   width: number;
  // }
  // const videos: video[] = [
  //   {
  //     youTubeEmbed:
  //       "https://www.loom.com/embed/442332bfea29448d98858c1bba45ce6b?sid=84f12cbf-1a00-4a11-98e4-df3a15b1daea",
  //     youTubeLink:
  //       "https://www.loom.com/share/442332bfea29448d98858c1bba45ce6b?sid=0d7577fa-0275-4172-b72d-9dcb5974401e",
  //     height: 640,
  //     width: 381,
  //   }
  // ];

  // const [videoIndex, setVideoIndex] = useState(0);

  // 640x521
  // const toggleVideo = () => {
  //   console.log("click");
  //   setVideoIndex(videoIndex === 0 ? 1 : 0);
  // };

  // const clickVideo = () => {
  //   console.log("click");
    // setVideoIndex(videoIndex === 0 ? 1 : 0)
  // };

  return (
    <main className="flex max-h-screen flex-col items-center my-8 md:m-12">
      <div className="text-2xl">Solution to Project 1</div>
      <div
        className='mt-8'
        // onClick={(e) => clickVideo()}
      >
        <iframe width="560" height="315" src="https://www.youtube.com/embed/9bujE0tmCBY?si=m-zI3mGp79tn6rHt" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        {/* <iframe
          className="w-full h-full"
          // className={`aspect-[${videos[videoIndex].height}/${videos[videoIndex].width}]`}
          src={videos[videoIndex].youTubeEmbed}
          allowFullScreen
          title="Solution to API pt 1"
          seamless
        ></iframe> */}
      </div>
      {/* <div className="flex space-x-5 mt-8 mb-3">
        <div className="text-md border-2 rounded-md my-8 px-4 py-2">Hit Play Above</div>
        <div className="my-8 px-4 py-2">or</div>
        <button className="my-8 rounded-md bg-purple-400 px-4 py-2">
          <a href={videos[videoIndex].youTubeLink}>Watch on Loom</a>
        </button>
      </div>
      <button
        className="my-8 rounded-md bg-purple-400 px-4 py-2"
        onClick={(e) => toggleVideo()}
      >
        See Fast Video
      </button> */}
    </main>
  );
}

{
  /* <iframe width="640" height="521" src="https://www.loom.com/embed/5eb5389f2b54415fa960be2b20def13f?sid=161d6248-b063-4bdc-9877-922344808da3" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> */
}
