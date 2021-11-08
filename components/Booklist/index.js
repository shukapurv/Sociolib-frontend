import React, { useState } from "react";
import { Box, makeStyles } from "@material-ui/core";
import { list } from "../../list";
import Card from "./Card";

const Books = (props) => {
  const [filterBooks, setFilterBooks] = useState(list);

  const handleSearch = (e) => {
    const { value } = e.target;
    const result = list.filter((data) => {
      return data.title.search(value) != -1;
    });
    setFilterBooks(result);
  };

  const Search = (props) => {
    return (
      <div className="font-sans text-black bg-white flex items-center justify-center">
        <div className="border rounded overflow-hidden flex">
          <input
            type="text"
            className="px-4 py-2"
            placeholder="Search..."
            onBlur={(e) => {
              handleSearch(e);
            }}
          />
          <button type="button" className="flex items-center justify-center px-4 border-l">
            <svg
              className="h-4 w-4 text-grey-dark"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
            </svg>
          </button>
        </div>
      </div>
    );
  };

  const listItems = filterBooks.map((a) => (
    <li>
      <Card {...a} />
    </li>
  ));

  return (
    <>
      <Box mt={13}>
        <Search func={handleSearch} />
      </Box>
      <Box m={2}>
        <ul>{listItems}</ul>
      </Box>
    </>
  );
};

export default Books;
