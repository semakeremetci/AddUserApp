import React, { useState } from "react";
import styles from "./AddUser.module.css";
import UICard from "../UI/UICard";
import Button from "../UI/Buttton";
import Modal from "../UI/Modal";

const AddUser = (props) => {
  let [inputName, setInputName] = useState("");
  let [inputAge, setInputAge] = useState(0);
  let [isValid, setIsValid] = useState();

  const inputNameChangeHandler = (event) => {
    setInputName(event.target.value);
  };
  const inputAgeChangeHandler = (event) => {
    setInputAge(Number(event.target.value));
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (inputName.trim().length === 0) {
      setIsValid({
        title: "Invalid Input",
        message: "Please enter a valid name.",
      });
      return;
    }
    if (inputAge <= 0) {
      setIsValid({
        title: "Invalid Age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    const updatedName =
      inputName.trim().charAt(0).toUpperCase() + inputName.trim().slice(1);
    console.log(updatedName);
    const dataInfo = {
      Name: updatedName,
      Age: Number(inputAge),
    };
    props.addUserData(dataInfo);
    setInputName("");
    setInputAge(0);
  };

  const errorHnadler = () => {
    setIsValid(null);
  };

  return (
    <div>
      {isValid && (
        <Modal
          title={isValid.title}
          message={isValid.message}
          onConfirm={errorHnadler}
        ></Modal>
      )}
      <UICard>
        <form
          className={`${styles["form-control"]}`}
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
            onChange={inputAgeChangeHandler}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </UICard>
    </div>
  );
};

export default AddUser;
