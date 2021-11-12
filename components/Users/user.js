import React from "react";

const user = () => {
  return (
    <div>
      <div className="flex">
        <img
          className="object-cover w-20 h-20 mr-4 rounded-full shadow"
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
          alt="Person"
        />
        <div className="flex flex-col justify-center">
          <p className="text-lg font-bold">Oliver Aguilerra</p>
          <p className="text-sm text-gray-800">Product Manager</p>
        </div>
      </div>
    </div>
  );
};

export default user;
