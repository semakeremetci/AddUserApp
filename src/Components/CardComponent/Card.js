import React from "react";
import styles from "./Card.module.css";
import CardItem from "./CardItem";

const Card = (props) => {
  return (
    <div className={styles.card}>
      {props.items.map((item) => {
        return <CardItem key={item.Id} data={item}></CardItem>;
      })}
    </div>
  );
};

export default Card;
