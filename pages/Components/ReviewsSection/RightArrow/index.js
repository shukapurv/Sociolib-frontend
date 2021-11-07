import React from "react";
import ChevronRightRoundedIcon from "@material-ui/icons/ChevronRightRounded";

const RightArrow = ({ onClick }) => {
  return (
    <div className="" onClick={onClick} style={{ cursor: "pointer" }}>
      <ChevronRightRoundedIcon />
    </div>
  );
};

export default RightArrow;
