import Input from "../UI/Input";
import styles from "./Form.module.css";
import Card from "../UI/Card";
import { useState } from "react";
const Form = (props) => {
  const [enteredname, setEnteredName] = useState("");
  const [enteredemail, setEnteredEmail] = useState("");
  const [enteredweb, setEnteredWeb] = useState("");
  const [enteredImg, setenteredImg] = useState("");
  const [enteredgender, setenteredGender] = useState("");
  const [enteredskill, setenteredSkill] = useState("");
  const [enteredskill2, setenteredSkill2] = useState("");
  const [enteredskill3, setenteredSkill3] = useState("");
  //   const [enteredfemale, setenteredFemale] = useState("");
  //   const [enteredmale, setenteredMale] = useState("");

  const studName = (event) => {
    console.log(event.target.value);
    setEnteredName(event.target.value);
  };
  const studEmail = (event) => {
    setEnteredEmail(event.target.value);
  };
  const studWeb = (event) => {
    setEnteredWeb(event.target.value);
  };
  const studImage = (event) => {
    setenteredImg(event.target.value);
  };
  const studGender = (event) => {
    console.log(event.target.id);
    setenteredGender(event.target.id);
  };
  const studSkill = (event) => {
    console.log(event.target.id);
    setenteredSkill(event.target.id);
  };
  const studSkill2 = (event) => {
    console.log(event.target.id);
    setenteredSkill2(event.target.id);
  };
  const studSkill3 = (event) => {
    console.log(event.target.id);
    setenteredSkill3(event.target.id);
  };

  //   const studMale = (event) => {
  //     console.log(event.target.id);

  //     setenteredMale(event.target.id);
  //   };
  //   const studFemale = (event) => {
  //     console.log(event.target.id);
  //     setenteredFemale(event.target.id);
  //   };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onAddForm(
      enteredname,
      enteredemail,
      enteredweb,
      enteredImg,
      enteredgender,
      enteredskill,
      enteredskill2,
      enteredskill3
      //   enteredmale,
      //   enteredfemale
    );
    setEnteredName("");
    setEnteredEmail("");
    setEnteredWeb("");
    setenteredImg("");
    // // setenteredMale("");
    // // setenteredFemale("");
    // // setenteredGender((event.target.id = ""));
    // // setenteredSkill((event.target.id = ""));
    // // setenteredSkill2((event.target.id = ""));
    // // setenteredSkill3((event.target.id = ""));
    // event.target.id = "";
  };
  return (
    <Card>
      <form onSubmit={formSubmitHandler} className={styles.form}>
        <Input
          label="Name"
          type="text"
          id="name"
          onChange={studName}
          value={enteredname}
        />
        <Input
          label="Email"
          type="email"
          id="email"
          onChange={studEmail}
          value={enteredemail}
        />
        <Input
          label="Website"
          type="text"
          id="website"
          onChange={studWeb}
          value={enteredweb}
        />
        <Input
          label="Image Link"
          type="url"
          id="url"
          placeholder="https://example.com"
          onChange={studImage}
          value={enteredImg}
        />
        <strong>Gender</strong>

        <div className={styles.radio}>
          <Input
            label="Male"
            type="radio"
            id="male"
            name="radiobutton"
            onChange={studGender}
            value={enteredgender}
          />
          <Input
            label="Female"
            type="radio"
            id="female"
            name="radiobutton"
            onChange={studGender}
            value={enteredgender}
          />
        </div>
        <strong>Skill:</strong>
        <div className={styles.radio}>
          <Input
            label="Java"
            type="checkbox"
            id="java"
            name="java"
            onChange={studSkill}
            value={enteredskill}
          />
          <Input
            label="Html"
            type="checkbox"
            id="Html"
            name="Html"
            onChange={studSkill2}
            value={enteredskill2}
          />
          <Input
            label="Css"
            type="checkbox"
            id="Css"
            name="Css"
            onChange={studSkill3}
            value={enteredskill3}
          />
        </div>
        <button>Enroll Student</button>
      </form>
    </Card>
  );
};
export default Form;
