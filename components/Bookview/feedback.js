import React, { useState } from "react";
import { Box, makeStyles } from "@material-ui/core";
import axios from "axios";
import Cookie from "js-cookie";

const useStyles = makeStyles((theme) => ({
  on: {
    color: "#000",
  },
  off: {
    color: "#ccc",
  },
}));

const Feedback = (props) => {
  const classes = useStyles();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");
  const submit = () => {
    axios
      .post(`https://sociolib-api.herokuapp.com/library/review/${props.id}/`, {
        headers: {
          Authorization: `Token ${Cookie.get("Token")}`,
        },
      })
      .then((res) => {
        console.log(res);
        alert("Added comment");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <div className="md:flex mb-6 m-6">
        <div className="md:w-1/3 p-5 ">
          <legend className="uppercase tracking-wide text-xl">Review</legend>
        </div>
        <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
          <textarea
            onBlur={(e) => {
              setComment(e.target.value);
            }}
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
          <div className="star-rating">
            {[...Array(5)].map((star, index) => {
              index += 1;
              return (
                <button
                  type="button"
                  key={index}
                  className={index <= (hover || rating) ? classes.on : classes.off}
                  onClick={() => setRating(index)}
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(rating)}>
                  <span className="star">&#9733;</span>
                </button>
              );
            })}
          </div>
        </div>
        <div className="md:flex-1 mt-2">
          <button
            onClick={() => submit()}
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
