import React from "react";
import Link from "next/link";

const user = (props) => {
  const image = `https://sociolib-api.herokuapp.com${props.profile_image}`;
  const route = `http://localhost:3000/profile/${props.username}`;
  return (
    <div>
      <div className="flex">
        <img className="object-cover w-20 h-20 mr-4 rounded-full shadow" src={image} alt="Person" />
        <div className="flex flex-col justify-center">
          <Link href={`/profile/${props.username}`}>
            <div className="text-lg font-bold">{props.username}</div>
          </Link>
          <p className="text-sm text-gray-800">{props.email}</p>
        </div>
      </div>
    </div>
  );
};

export default user;
