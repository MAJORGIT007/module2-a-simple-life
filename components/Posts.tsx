import React from "react";
import Link from "next/link";

type card = {
  key: number;
  image: string;
  title: string;
  date: string;
  text: string;
};

function Posts(props: card) {
  return (
    <div className="flex flex-col md:flex-row md:gap-4">
      <div className="md:w-[30%]">
        <img
          src={`/${props.image}`}
          alt={props.title}
          className="min-h-[250px] max-w-full object-cover"
        />
        <p className="my-4 text-sm">{props.date}</p>
      </div>
      <div className="flex flex-col md:w-[70%]">
        <h2 className="mb-3 font-lora text-2xl font-medium text-sky-900">
          {props.title}
        </h2>
        <p className="leading-relaxed">{props.text}</p>
        <Link
          href="#"
          className="my-6 font-bold uppercase text-sky-600 hover:text-sky-900"
        >
          continue reading
        </Link>
      </div>
    </div>
  );
}
export default Posts;
