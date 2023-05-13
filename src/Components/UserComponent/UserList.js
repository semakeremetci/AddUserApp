import React from "react";
import styles from "./UserList.module.css";
import UICard from "../UI/UICard";

const Card = (props) => {
  return (
    <UICard>
      <ul>
        {props.items.map((item) => {
          return (
            <li key={item.Id} className={styles.listItem}>
              <p>
                <b>{item.Name}</b> is <b>{item.Age}</b> years old.
              </p>
            </li>
          );
        })}
      </ul>
    </UICard>
  );
};

export default Card;
