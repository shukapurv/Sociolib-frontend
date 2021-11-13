import React from "react";
import { Box, makeStyles } from "@material-ui/core";

const Card = (props) => {
  console.log(props);
  const str = `/book/${props.id}`;
  return (
    <>
      <div className="container mt-20 mx-auto p-4 md:p-0">
        <div className="shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto">
          <div
            className="bg-cover bg-bottom border w-full md:w-1/3 h-64 md:h-auto relative"
            style={{
              backgroundImage: `url("https://sociolib-api.herokuapp.com${props.cover_image}")`,
            }}>
            <div className="absolute text-xl">
              <i className="fa fa-heart text-white hover:text-red-light ml-4 mt-4 cursor-pointer" />
            </div>
          </div>

          <div className="bg-white w-full md:w-2/3">
            <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
              <div className="bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
                <div className="w-full lg:w-1/5 lg:border-right lg:border-solid text-center md:text-left">
                  <h3>{props.name}</h3>
                  <p className="mb-0 mt-3 text-grey-dark text-sm">Rating:{props.rating}</p>
                  <hr className="w-1/4 md:ml-0 mt-4  border lg:hidden" />
                </div>

                <div className="w-full lg:w-3/5 lg:px-3">
                  <p className="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm">
                    {props.summary}
                  </p>
                </div>

                <div className="w-full lg:w-1/5 mt-6 lg:mt-0 lg:px-4 text-center md:text-left">
                  <button
                    type="button"
                    className="bg-white hover:bg-grey-darker hover:text-white border border-solid border-grey w-1/3 lg:w-full py-2">
                    <a href={str}>Open</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
