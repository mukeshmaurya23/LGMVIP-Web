//import Card from "../UI/Card";
import styles from "./Formlist.module.css";
const Formlist = (props) => {
  return (
    <div className={styles.users}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Description</th>

            <th>Image</th>
          </tr>
        </thead>

        <tbody>
          {props.stud.map((item) => (
            <tr key={item.id}>
              <td className={styles.trdata}>
                {item.name}
                <br />
                {item.email}
                <br />
                {item.website}
                <br />
                {item.gender}
                <br />
                {item.skill}
                <br />
                {item.skill1}
                <br />
                {item.skill2}
              </td>
              <td className={styles.avtar}>
                <img src={item.image} alt="avtar" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Formlist;
/*

<table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>Image</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {props.stud.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.email} </td>
              <td>{item.website}</td>

              <td>
                <img src={item.image} alt="avtar" />
              </td>
              <td>{item.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
*/
