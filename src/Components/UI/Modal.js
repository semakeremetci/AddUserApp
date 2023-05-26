// You can use React.Fragment as a wrapper.
// With React Portals, you can render a component anywhere in index.html.

import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import UICard from "./UICard";
import Button from "./Buttton";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm} />;
};

const ModalOvarlay = (props) => {
  return (
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
  );
};
const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOvarlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default Modal;
