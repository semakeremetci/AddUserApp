import React from "react";
import classes from "./UICard.module.css";

const UICard = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default UICard;
