import React, { useState } from "react";
import AddUser from "./Components/UserComponent/AddUser";
import UserList from "./Components/UserComponent/UserList";
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
      <AddUser addUserData={dataHandler}></AddUser>
      <UserList items={itemsInfo}></UserList>
    </div>
  );
}

export default App;
