import React, { useState } from "react";
import { Box } from "@material-ui/core";
import { list } from "../../list";
import User from "./user";

const index = () => {
  const [filterUsers, setFilterUsers] = useState(list);
  const [searchKey, setSearchKey] = useState("");

  React.useEffect(() => {
    let result;
    if (searchKey.length === 0) result = list;
    else {
      result = list.filter((data) => {
        return data.title.search(searchKey) !== -1;
      });
    }
    setFilterUsers(result);
  }, [searchKey]);

  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400" />
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                <defs>
                  <pattern
                    id="247432cb-6e6c-4bec-9766-564ed7c230dc"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30">
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect fill="url(#247432cb-6e6c-4bec-9766-564ed7c230dc)" width="52" height="24" />
              </svg>
              <span className="relative">Welcome</span>
            </span>{" "}
            our already registered users
          </h2>
        </div>
        <Box m={13}>
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
        <div>
          <ul className="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">
            {filterUsers.map((a) => (
              <li key={a.id}>
                <User />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default index;
