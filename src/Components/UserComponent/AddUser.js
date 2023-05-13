import React, { useState } from "react";
import styles from "./AddUser.module.css";
import UICard from "../UI/UICard";
import Button from "../UI/Buttton";

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
      const updatedName =
        inputName.trim().charAt(0).toUpperCase() + inputName.trim().slice(1);
      console.log(updatedName);
      const dataInfo = {
        Name: updatedName,
        Age: Number(inputAge),
      };
      props.addUserData(dataInfo);
    } else {
      setIsValid(false);
    }
    setInputName("");
    setInputAge(0);
  };

  return (
    <UICard>
      <form
        className={`${styles["form-control"]} ${!isValid && styles.inValid}`}
        onSubmit={formSubmitHandler}
      >
        <label>Username:</label>
        <input
          type="text"
          value={inputName}
          onChange={inputNameChangeHandler}
        ></input>
        <label>Age:</label>
        <input
          value={inputAge}
          type="number"
          min={1}
          max={100}
          onChange={inputAgeChangeHandler}
        ></input>
        <Button type="submit">Add User</Button>
      </form>
    </UICard>
  );
};

export default AddUser;
