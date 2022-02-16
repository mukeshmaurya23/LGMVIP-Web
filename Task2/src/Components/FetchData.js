import styles from "./FetchData.module.css";
import Card from "./UI/Card";
const FetchData = (props) => {
  return (
    <Card className={styles.users}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Email</th>
            <th>First_Name</th>
            <th>Last_Name</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.email} </td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>
                <img src={item.avatar} alt="avtar" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};
export default FetchData;
