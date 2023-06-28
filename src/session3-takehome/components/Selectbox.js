import styles from "../styles.module.css";

const Selectbox = (props) => {
  const { data } = props;
  return (
    <select {...props}>
      {data.map((item) => (
        <option key={item.id} value={item.value}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default Selectbox;
