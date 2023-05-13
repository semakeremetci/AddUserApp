import React from "react";
import styles from "./Modal.module.css";
import UICard from "./UICard";
import Button from "./Buttton";

const Modal = (props) => {
  return (
    <UICard className={styles.modal}>
      <header>{props.title}</header>
      <div>{props.message}</div>
      <footer>
        <Button type="button">Okay</Button>
      </footer>
    </UICard>
  );
};

export default Modal;
