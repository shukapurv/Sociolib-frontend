import React from "react";
import Info from "./info";
import Reviews from "./reviews";
import Feedback from "./feedback";

const index = () => {
  return (
    <div>
      <Info />
      <hr />
      <div className="bg-gray-50">
        <div className="grid justify-items-center pt-9 pb-11 divide-y divide-gray-800">
          <h1 className="inline-block align-baseline text-3xl antialiased font-semibold font-serif">
            Create review
          </h1>
          <div className="mt-3 pt-7 w-full">
            <Feedback />
          </div>
        </div>
      </div>
      <hr />
      <div className="bg-blue-100">
        <div className="grid justify-items-center pt-9 pb-11 divide-y divide-gray-800">
          <h1 className="inline-block align-baseline text-3xl antialiased font-semibold font-serif">
            Top reviews
          </h1>
          <div className="mt-4">
            <Reviews />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
