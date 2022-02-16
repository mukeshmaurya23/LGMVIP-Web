import styles from "./Input.module.css";
const Input = (props) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
};
export default Input;
