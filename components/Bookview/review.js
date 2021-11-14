import React from "react";
import ReactStars from "react-rating-stars-component";

const reviews = (props) => {
  const firstExample = {
    size: 30,
    value: props.rating,
    edit: false,
  };
  return (
    <body>
      <section className="font-sans container m-auto max-w-xxl py-8">
        <div className="flex py-3">
          <div>
            <img
              src={`https://sociolib-api.herokuapp.com${props.user.profile_image}`}
              className="block rounded-full h-12 w-12 mr-2 bg-gray-300"
            />
          </div>
          <div className="w-100">
            <div className="flex justify-between">
              <div className="flex">
                <span className="font-bold">
                  <a href="#" className="text-black">
                    {props.user.first_name}
                  </a>
                </span>
                <span className="text-gray-700">@{props.user.username}</span>
                <span className="ml-20">
                  <ReactStars {...firstExample} />
                </span>
              </div>
            </div>
            <div className="">
              <p className="my-3 text-sm">{props.comment}</p>
              <hr className="border-b border-gray-400" />
            </div>
          </div>
        </div>
      </section>
    </body>
  );
};

export default reviews;
