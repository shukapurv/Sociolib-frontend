import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import axios from "axios";
import Cookie from "js-cookie";

const Info = (props) => {
  const image = `https://sociolib-api.herokuapp.com${props.cover_image}`;
  console.log(props);
  const [is_owned, setIsowned] = useState(false);

  React.useEffect(() => {
    axios
      .get(`https://sociolib-api.herokuapp.com/auth/profile/`, {
        headers: {
          Authorization: `Token ${Cookie.get("Token")}`,
        },
      })
      .then((res) => {
        const arr = res.data.books;
        let i = res.data.books.length;
        while (i--) {
          if (arr[i].id == props.id) {
            setIsowned(true);
          }
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const issueFunc = () => {
    if (is_owned) {
      alert("Already issued");
    } else {
      axios
        .post(
          `https://sociolib-api.herokuapp.com/library/issue/${props.id}/`,
          {},
          {
            headers: {
              Authorization: `Token ${Cookie.get("Token")}`,
            },
          },
        )
        .then((res) => {
          alert("Book issued");
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">BOOK NAME</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{props.name}</h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <span>{props.rating}&#11088;</span>
                <span className="text-gray-600 ml-8">
                  {props.book_review != undefined ? props.book_review.length : "unknown"} Reviews
                </span>
              </span>
            </div>
            <div className="mb-3 flex flex-wrap">
              <span className="text-sm font-medium bg-gray-300 py-1 px-2 rounded-full text-black-500 align-middle">
                {props.genre}
              </span>
            </div>
            <p className="leading-relaxed">{props.summary}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3">Author-</span>
                <span className="text-blue-700">{props.author}</span>
              </div>
              <div className="flex ml-6 items-center" />
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">₹{props.price}</span>
              {}
              <button
                onClick={issueFunc}
                type="button"
                className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Issue
              </button>
              <button
                type="button"
                className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
