import React, { useState } from "react";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  let [inputName, setInputName] = useState("");
  let [inputAge, setInputAge] = useState(0);
  const [isValid, setIsValid] = useState(true);

  const inputNameChangeHandler = (event) => {
    setInputName(event.target.value);
  };
  const inputAgeChangeHandler = (event) => {
    setInputAge(Number(event.target.value));
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (inputName.trim().length !== 0 && inputAge !== 0) {
      setIsValid(true);
      const dataInfo = {
        Name: inputName.trim(),
        Age: Number(inputAge),
      };
      props.addUserData(dataInfo);
    } else {
      setIsValid(false);
    }
  };

  return (
    <form
      className={`${styles["form-control"]} ${!isValid && styles.inValid}`}
      onSubmit={formSubmitHandler}
    >
      <label>Username:</label>
      <input type="text" onChange={inputNameChangeHandler}></input>
      <label>Age:</label>
      <input
        type="number"
        min={1}
        max={100}
        onChange={inputAgeChangeHandler}
      ></input>
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
