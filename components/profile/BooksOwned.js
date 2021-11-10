import React from "react";
import Card from "./Card";

const BooksOwned = () => {
  return (
    <div className="grid grid-rows-2 grid-flow-col gap-4">
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default BooksOwned;
