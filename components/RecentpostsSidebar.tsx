import React from "react";
import data from "data";
import Link from "next/link";

function RecentpostsSidebar() {
  const posts = data
    .filter((item) => item.id !== 1)
    .map((item) => {
      return (
        <div className="">
          <div className="relative">
            <img
              src={`/${item.image}`}
              alt="item.title"
              className="my-[0.5rem]"
            />
          </div>
          <h2 className=" font-lora text-sky-900">{item.title}</h2>
        </div>
      );
    });

  return (
    <div className="mt-10 border-[20px] border-neutral-100 p-5">
      <Link
        href="/recentposts"
        className="text-xl font-bold uppercase text-sky-900 hover:text-sky-600 focus:text-sky-600"
      >
        Recent posts
      </Link>
      <div className="flex flex-col gap-4">{posts}</div>
    </div>
  );
}

export default RecentpostsSidebar;
