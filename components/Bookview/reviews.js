import React from "react";
import { list } from "../../list";
import Review from "./review";

const reviews = (props) => {
  console.log(props);
  const all = props.book_review === undefined ? [] : props.book_review;
  return (
    <div>
      <ul>
        {all.slice(0, 5).map((a) => (
          <li key={a.id}>
            <Review {...a}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default reviews;
