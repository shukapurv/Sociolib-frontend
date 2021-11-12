import React from "react";
import Star from "./rateStars";

const Feedback = () => {
  return (
    <div>
      <div className="md:flex mb-6 m-6">
        <div className="md:w-1/3 p-5 ">
          <legend className="uppercase tracking-wide text-xl">Review</legend>
        </div>
        <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
          <textarea
            className="w-full shadow-inner p-5 border-0"
            placeholder="What did you like or dislike."
            rows="7"
          />
        </div>
      </div>
      <div className="md:flex mb-6 m-6">
        <div className="md:w-1/3 p-5 ">
          <legend className="uppercase tracking-wide text-xl">Rate</legend>
        </div>
        <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
          <Star />
        </div>
        <div className="md:flex-1 mt-2">
          <button
            type="submit"
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
