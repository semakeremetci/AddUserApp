import React, { useState } from "react";
import User from "./Components/UserComponent/User";
import Card from "./Components/CardComponent/Card";
import Modal from "./Components/Modal/Modal";
import styles from "./App.module.css";

function App() {
  const defaultItems = [
    {
      Id: "01",
      Name: "Max",
      Age: 31,
    },
    {
      Id: "02",
      Name: "Sema",
      Age: 23,
    },
  ];

  let [itemsInfo, setItemsInfo] = useState(defaultItems);
  const dataHandler = (enteredData) => {
    setItemsInfo((prevInfo) => {
      const updatedItems = [...prevInfo];
      updatedItems.unshift({
        Name: enteredData.Name,
        Age: enteredData.Age,
        Id: Math.random().toString(),
      });
      console.log(updatedItems);
      return updatedItems;
    });
  };
  return (
    <div className={styles.body}>
      <Modal></Modal>
      <User userData={dataHandler}></User>
      <Card items={itemsInfo}></Card>
    </div>
  );
}

export default App;
