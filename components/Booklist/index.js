import React, { useState } from "react";
import { Box } from "@material-ui/core";
import axios from "axios";
import { list } from "../../list";
import Card from "./Card";

const Books = () => {
  const [filterBooks, setFilterBooks] = useState(list);
  const [searchKey, setSearchKey] = useState("");
  React.useEffect(() => {
    axios
      .get(`https://sociolib-api.herokuapp.com/library/books/`)
      .then((res) => {
        console.log(res);
        setFilterBooks(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  React.useEffect(() => {
    let result;
    if (searchKey.length === 0) result = list;
    else {
      result = list.filter((data) => {
        return data.title.search(searchKey) !== -1;
      });
    }
    setFilterBooks(result);
  }, [searchKey]);

  return (
    <>
      <Box mt={13}>
        <div className="font-sans text-black bg-white flex items-center justify-center">
          <div className="border rounded overflow-hidden flex">
            <input
              type="text"
              className="px-4 py-2"
              placeholder="Search..."
              onChange={(e) => setSearchKey(e.target.value)}
              value={searchKey}
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
      </Box>
      <Box mt={2}>
        <div className="container my-12 mx-auto px-4 md:px-12">
          <ul className="flex flex-wrap -mx-1 lg:-mx-4">
            {filterBooks.map((a) => (
              <li key={a.id} className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                <Card {...a} />
              </li>
            ))}
          </ul>
        </div>
      </Box>
    </>
  );
};

export default Books;
