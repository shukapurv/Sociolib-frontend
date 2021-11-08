import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import Search from "@components/Booklist/Searchbar";
import { list } from "../../list";
import Card from "./Card";

const Books = (props) => {
  const listItems = list.map((a) => (
    <li>
      <Card {...a} />
    </li>
  ));

  return (
    <>
      <Box mt={13}>
        <Search />
      </Box>
      <Box m={2}>
        <ul>{listItems}</ul>
      </Box>
    </>
  );
};

export default Books;
