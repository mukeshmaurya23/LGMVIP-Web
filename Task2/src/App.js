import "./App.css";
import react, { useState } from "react";
import FetchData from "./Components/FetchData";
import Navigation from "./Components/Navigation";

const App = () => {
  const [Users, ApiUsers] = useState([]);
  const getData = () => {
    fetch("https://reqres.in/api/users?page=1")
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
        ApiUsers(res.data);
      });
  };
  return (
    <react.Fragment>
      <Navigation onAddData={getData} />
      <FetchData users={Users} />
    </react.Fragment>
  );
};

export default App;
