import React, { useState } from "react";
import AddUser from "./Components/UserComponent/AddUser";
import UserList from "./Components/UserComponent/UserList";

function App() {
  const defaultItems = [
    {
      Id: "01",
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
    <div>
      <AddUser addUserData={dataHandler}></AddUser>
      <UserList items={itemsInfo}></UserList>
    </div>
  );
}

export default App;
