import React from "react";
import aboutMe from "/public/about-me.jpg";
import Image from "next/image";
import Link from "next/link";

function AboutmeSidebar() {
  return (
    <div className="w-full border-[20px] border-neutral-100 p-5">
      <Link
        href="/aboutme"
        className="text-xl font-bold uppercase text-sky-900 hover:text-sky-600 focus:text-sky-600"
      >
        About me
      </Link>
      <Image
        src={aboutMe}
        alt="man smilling"
        style={{ margin: ".5rem 0 1rem 0" }}
      />
      <p>
        I find life better, and I'm happier, when things are nice and simple.
      </p>
    </div>
  );
}

export default AboutmeSidebar;
