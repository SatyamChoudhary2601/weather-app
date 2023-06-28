import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./userDashboard.module.css";

const BASE_URL = "https://reqres.in/api/users";

const UserDashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const getData = async (id) => {
    setLoading(true);
    try {
      const res = await axios.get(`${BASE_URL}/${id}`);
      setUser(res?.data?.data);
    } catch (error) {
      console.log(error, "errorr");
      alert("Faild to fetch data!");
      setUser(null);
    }
    setLoading(false);
  };
  useEffect(() => {
    getData(1);
  }, []);
  const onClickHandler = (id) => {
    getData(id);
  };

  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={() => onClickHandler(1)}>
        1
      </button>
      <button className={styles.btn} onClick={() => onClickHandler(2)}>
        2
      </button>
      <button className={styles.btn} onClick={() => onClickHandler(3)}>
        3
      </button>
      <button className={styles.btn} onClick={() => onClickHandler(100)}>
        100
      </button>

      {loading ? (
        <div className={styles.loader}></div>
      ) : (
        <div>
          <ul>
            <li>Email: {user?.email ?? "NA"}</li>
            <li>
              Name: {user?.first_name ?? "NA"} {user?.last_name}
            </li>
          </ul>
          <div>
            <img
              src={
                user?.avatar ??
                "https://pdtxar.com/wp-content/uploads/2019/04/person-placeholder.jpg"
              }
              alt="userImg"
              width={200}
              height={200}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
