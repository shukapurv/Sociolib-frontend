import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import Link from "next/link";

const Card = (props) => {
  console.log(props);
  const str = `/book/${props.id}`;
  const route = `https://sociolib.netlify.app/book/${props.id}`;
  const image = `https://sociolib-api.herokuapp.com${props.cover_image}`;
  return (
    <>
      <article className="overflow-hidden rounded-lg shadow-lg cursor-pointer">
        <Link href={`/book/${props.id}`}>
          <img alt="Placeholder" className="block h-auto w-full" src={image} />
        </Link>

        <header className="flex items-center justify-between leading-tight p-2 md:p-4  cursor-pointer">
          <Link href={`/book/${props.id}`}>
            <h1 className="text-lg">
              <div className="no-underline hover:underline text-black">
                {props.name}
              </div>
            </h1>
          </Link>
        </header>

        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
          <div className="flex items-center no-underline hover:underline text-black">
            <img
              alt="Placeholder"
              className="block rounded-full"
              src="https://picsum.photos/32/32/?write"
            />
            <p className="ml-2 text-sm">{props.author}</p>
          </div>
        </footer>
      </article>
    </>
  );
};

export default Card;
