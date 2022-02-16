import classes from "./Navigation.module.css";

const Navigation = (props) => {
  function refpage() {
    window.location.reload(false);
  }

  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="/">Products</a>
        </li>

        <li>
          <a href="/">Admin</a>
        </li>

        <li className={classes.button1}>
          <button onClick={props.onAddData}>Get Users</button>
        </li>
        <li>
          <button onClick={refpage}>&#x2716;</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
