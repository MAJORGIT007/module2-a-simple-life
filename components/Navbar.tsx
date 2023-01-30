import React from "react";
import Link from "next/link";

function Navbar() {
  //   const navLinks = ["Home", "about me", "RecentPosts"];
  //   const navMap = navLinks.map((link) => {
  //     return (
  //       <li className="font-ubuntu text-sm font-bold uppercase">
  //         <Link
  //           href={`${link}`}
  //           className="cursor-pointer text-neutral-500 hover:text-sky-600 focus:text-sky-600"
  //         >
  //           {link}
  //         </Link>
  //       </li>
  //     );
  //   });

  return (
    <div className=" bg-neutral-100 py-8 ">
      <div className="mx-auto flex w-[90%] max-w-[980px] flex-col items-center justify-between sm:flex-row">
        <div className="flex flex-col items-center">
          <h1 className="font-lora text-2xl font-medium text-sky-900">
            Living the simple life
          </h1>
          <small className="font-ubuntu text-[.675rem] font-bold uppercase tracking-wider text-sky-600">
            a blog exploring minimalism in life
          </small>
        </div>
        <ul className="mt-4 flex flex-col gap-6 text-center sm:mt-0 sm:ml-4 sm:flex-row">
          <li className="font-ubuntu text-sm font-bold uppercase">
            <Link
              href="home"
              className="cursor-pointer text-neutral-500 hover:text-sky-600 focus:text-sky-600"
            >
              HOME
            </Link>
          </li>
          <li className="font-ubuntu text-sm font-bold uppercase">
            <Link
              href="aboutme"
              className="cursor-pointer text-neutral-500 hover:text-sky-600 focus:text-sky-600"
            >
              ABOUT ME
            </Link>
          </li>
          <li className="font-ubuntu text-sm font-bold uppercase">
            <Link
              href="recentposts"
              className="cursor-pointer text-neutral-500 hover:text-sky-600 focus:text-sky-600"
            >
              RECENT POSTS
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
