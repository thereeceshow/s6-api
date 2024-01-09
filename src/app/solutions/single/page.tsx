"use client";
export default function page() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 w-screen">
      <div className="text-2xl">Solution to Project 1</div>
      {/* <div className="mt-5 w-full md:w-1/2 rounded-lg space-y-3 bg-blue-200"> */}
        <div className="iframe w-full mt-5">
          <iframe
            src="https://www.loom.com/embed/442332bfea29448d98858c1bba45ce6b?sid=84f12cbf-1a00-4a11-98e4-df3a15b1daea"
            allowFullScreen
            title="Solution to API pt 1"
          ></iframe>
        </div>
        <div></div>
        <button className="mt-8 rounded-md bg-purple-400 px-4 py-2"><a href="https://www.loom.com/share/442332bfea29448d98858c1bba45ce6b?sid=0d7577fa-0275-4172-b72d-9dcb5974401e">Watch on Loom</a></button>
    </main>
  );
}
