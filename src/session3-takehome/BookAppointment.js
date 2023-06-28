import axios from "axios";
import { useState } from "react";
import Input from "./components/Input";
import Selectbox from "./components/Selectbox";
import styles from "./styles.module.css";

const BookAppointment = () => {
  const [successMsg, setSuccessMsg] = useState(null);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    doctor: "",
    where: "",
    when: "",
    loading: false,
    message: ""
  });
  const { firstname, lastname, email, doctor, loading, where, when } = formData;
  const onChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const selectData = [
    { id: 1, name: "SELECT DOCTOR", value: "" },
    { id: 2, name: "Dr. Satyam", value: "satyam" },
    { id: 3, name: "Dr. Heena", value: "heena" },
    { id: 4, name: "Dr. Rajat", value: "rajat" },
    { id: 5, name: "Dr. Prashant", value: "prashant" },
    { id: 6, name: "Dr. Nushrat", value: "nush" }
  ];
  const selectChange = (event) => {
    setFormData({
      ...formData,
      doctor: event.target.value
    });
  };
  const radioOnChange = (e) => {
    setFormData({
      ...formData,
      where: e.target.id
    });
  };
  const dateOnChange = (e) => {
    setFormData({
      ...formData,
      when: e.target.value
    });
  };
  const resetForm = () => {
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      doctor: "",
      where: "",
      when: "",
      loading: false
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (
      firstname === "" ||
      lastname === "" ||
      email === "" ||
      doctor === "" ||
      where === "" ||
      when === ""
    ) {
      alert("Please fill all the fields");
      return;
    }
    setFormData({
      ...formData,
      loading: true
    });
    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        formData
      );
      if (res.status === 201) {
        setSuccessMsg("Appointment booked successfully!");
      }
    } catch (error) {
      console.log(error);
    }
    setFormData({
      ...formData,
      loading: false
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {successMsg && (
          <div>
            <h2>{successMsg}</h2>
            <button
              onClick={() => {
                resetForm();
                setSuccessMsg(null);
              }}
            >
              Cancel appointment
            </button>
          </div>
        )}
        {successMsg === null && (
          <>
            <h2>Book a session</h2>
            <p>
              Fill in the form below to book a vurtual session with your doctor
            </p>
            {!loading ? (
              <form onSubmit={onSubmit}>
                <h3>Basic Info</h3>
                <Input
                  label="First Name: "
                  id="firstname"
                  name="firstname"
                  value={firstname}
                  placeholder="First Name"
                  onChange={onChangeHandler}
                />
                <Input
                  label="Last Name: "
                  id="lastname"
                  name="lastname"
                  value={lastname}
                  placeholder="Last Name"
                  onChange={onChangeHandler}
                />
                <Input
                  label="Email: "
                  id="email"
                  name="email"
                  value={email}
                  placeholder="Email"
                  onChange={onChangeHandler}
                />
                <br />
                <h3>Doctor</h3>
                <Selectbox data={selectData} onChange={selectChange} />
                {doctor !== "" && (
                  <div className={styles.radioContainer}>
                    <h3>Where?</h3>
                    <div className={styles.radio}>
                      <Input
                        type="radio"
                        id="googleMeet"
                        name="googleMeet"
                        onChange={radioOnChange}
                      />
                      <label>Google Meet</label>
                    </div>
                    <div className={styles.radio}>
                      <Input
                        type="radio"
                        id="phone"
                        name="phone"
                        onChange={radioOnChange}
                      />
                      <label>Phone</label>
                    </div>
                  </div>
                )}
                {doctor !== "" && (
                  <div className={styles.radioContainer}>
                    <h3>When?</h3>
                    <div className={styles.radio}>
                      <Input
                        type="date"
                        id="when"
                        name="when"
                        onChange={dateOnChange}
                      />
                    </div>
                  </div>
                )}
                <button>Confirm Booking</button>
              </form>
            ) : (
              <div className={styles.loadingContainer}>
                <h2>Scheduling the appointment! </h2>
                <div className={styles.loader}></div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default BookAppointment;
