import React from "react";
import { list } from "../../list";
import Review from "./review";

const reviews = () => {
  return (
    <div>
      <ul>
        {list.slice(0, 5).map((a) => (
          <li key={a.id}>
            <Review />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default reviews;
