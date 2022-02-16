import React, { useState } from "react";
import Form from "./components/Form/Form";
import "./App.css";
import MainHeader from "./components/MainHeader/MainHeader";
import Formlist from "./components/Form/Formlist";

const App = () => {
  const [studList, setStudList] = useState([]);
  const studFormHandler = (
    sname,
    semail,
    swebsite,
    simagelink,
    sgender,
    sskill,
    sskill1,
    sskill2
  ) => {
    setStudList((prevState) => {
      return [
        ...prevState,
        {
          id: Math.random().toString(),
          name: sname,
          email: semail,
          website: swebsite,
          image: simagelink,
          gender: sgender,
          skill: sskill,
          skill1: sskill1,
          skill2: sskill2,
        },
      ];
    });
  };
  return (
    <React.Fragment>
      <MainHeader />
      <div className="main-container">
        <div className="container">
          <Form onAddForm={studFormHandler} />
        </div>
        <div className="container container2">
          <Formlist stud={studList} />
        </div>
      </div>
    </React.Fragment>
  );
};
export default App;
