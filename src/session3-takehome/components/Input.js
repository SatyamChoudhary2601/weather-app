import styles from "../styles.module.css";

const Input = (props) => {
  const { id, label } = props;
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={id}>{label}</label>
      <input {...props} />
    </div>
  );
};

export default Input;
