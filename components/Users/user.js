import React from "react";

const user = (props) => {
  const image = `https://sociolib-api.herokuapp.com${props.profile_image}`;
  return (
    <div>
      <div className="flex">
        <img className="object-cover w-20 h-20 mr-4 rounded-full shadow" src={image} alt="Person" />
        <div className="flex flex-col justify-center">
          <p className="text-lg font-bold">{props.username}</p>
          <p className="text-sm text-gray-800">{props.email}</p>
        </div>
      </div>
    </div>
  );
};

export default user;
