import React from "react";
import styles from "./Modal.module.css";
import UICard from "./UICard";
import Button from "./Buttton";

const Modal = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onConfirm} />
      <UICard className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button type="button" onClick={props.onConfirm}>
            Okay
          </Button>
        </footer>
      </UICard>
    </div>
  );
};

export default Modal;
