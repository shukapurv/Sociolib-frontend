import React from "react";
import ChevronLeftRoundedIcon from "@material-ui/icons/ChevronLeftRounded";

const LeftArrow = ({ onClick }) => {
  return (
    <div className="icons" onClick={onClick} style={{ cursor: "pointer" }}>
      <ChevronLeftRoundedIcon />
    </div>
  );
};

export default LeftArrow;
