import React from "react";
import styles from "./CardItem.module.css";

const CardItem = (props) => {
  return (
    <div className={styles.cardItem}>
      <p>
        <b>Name</b>: {props.data.Name} <b>Age</b>: {props.data.Age}
      </p>
    </div>
  );
};

export default CardItem;
