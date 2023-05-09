import React from "react";
import AddUser from "./AddUser";
import styles from "./User.module.css";

const User = (props) => {
  const addDataHandler = (enteredData) => {
    console.log(enteredData);
    props.userData(enteredData);
  };
  return (
    <div className={styles.chart}>
      <AddUser addUserData={addDataHandler}></AddUser>
    </div>
  );
};
export default User;
