// import axios from "axios";
// import { useEffect, useState } from "react";
// import styles from "./dog.module.css";

// const DOG_LIST = [
//   { id: 1, label: "Random", value: "random" },
//   { id: 2, label: "Beagle", value: "beagle" },
//   { id: 3, label: "Boxer", value: "boxer" },
//   { id: 4, label: "Dalmatian", value: "dalmatian" },
//   { id: 5, label: "Husky", value: "husky" }
// ];
// const DogPics = () => {
//   const [picUrl, setPicUrl] = useState("");
//   const [selectedBreed, setSelectedBreed] = useState("random");
//   const [loading, setLoading] = useState(false);

//   const getDogData = async () => {
//     setLoading(true);
//     let url = `https://dog.ceo/api/breeds/image/random`;
//     if (selectedBreed !== "random") {
//       url = `https://dog.ceo/api/breed/${selectedBreed}/images/random`;
//     }
//     try {
//       const res = await axios.get(url);
//       setPicUrl(res?.data?.message);
//     } catch (error) {
//       console.log(error, "errorr");
//       alert("Faild to fetch data!");
//     }
//     setLoading(false);
//   };
//   useEffect(() => {
//     getDogData();
//   }, [selectedBreed]);

//   const onChangeHandler = (e) => {
//     setSelectedBreed(e.target.value);
//   };
//   const nextHandler = () => {
//     getDogData();
//   };
//   console.log(picUrl, "picUrl");
//   return (
//     <div className={styles.container}>
//       <span>Select a breed: </span>
//       <select onChange={onChangeHandler} value={selectedBreed}>
//         {DOG_LIST.map((list) => (
//           <option value={list.value} key={list.id}>
//             {list.label}
//           </option>
//         ))}
//       </select>
//       <br />
//       <br />
//       {loading ? (
//         "Loading..."
//       ) : (
//         <div>
//           <img src={picUrl} height={500} width={500} alt="dog img" />
//         </div>
//       )}
//       <button disabled={loading} onClick={nextHandler}>
//         Next
//       </button>
//     </div>
//   );
// };

// export default DogPics;

import React from "react";
import styles from "./dog.module.css";
import axios from "axios";
const DOG_LIST = [
  { id: 1, label: "Random", value: "random" },
  { id: 2, label: "Beagle", value: "beagle" },
  { id: 3, label: "Boxer", value: "boxer" },
  { id: 4, label: "Dalmatian", value: "dalmatian" },
  { id: 5, label: "Husky", value: "husky" }
];
class DogPics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      picUrl: "",
      selectedBreed: "random",
      loading: false
    };
  }

  getDogData = async () => {
    this.setState((prev) => ({
      ...prev,
      loading: true
    }));
    let url = `https://dog.ceo/api/breeds/image/random`;
    if (this.state.selectedBreed !== "random") {
      url = `https://dog.ceo/api/breed/${this.state.selectedBreed}/images/random`;
    }
    try {
      const res = await axios.get(url);
      this.setState((prev) => ({
        ...prev,
        picUrl: res?.data?.message
      }));
    } catch (error) {
      console.log(error, "errorr");
      alert("Faild to fetch data!");
    }
    this.setState((prev) => ({
      ...prev,
      loading: false
    }));
  };
  componentDidMount() {
    this.getDogData();
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("aaaa", prevProps, prevState);
    if (this.state.selectedBreed !== prevState.selectedBreed) {
      this.getDogData();
    }
  }
  onChangeHandler = (e) => {
    this.setState((prev) => ({
      ...prev,
      selectedBreed: e.target.value
    }));
  };
  nextHandler = () => {
    this.getDogData();
  };
  render() {
    const { picUrl, selectedBreed, loading } = this.state;
    return (
      <div className={styles.container}>
        <span>Select a breed: </span>
        <select onChange={this.onChangeHandler} value={selectedBreed}>
          {DOG_LIST.map((list) => (
            <option value={list.value} key={list.id}>
              {list.label}
            </option>
          ))}
        </select>
        <br />
        <br />
        {loading ? (
          "Loading..."
        ) : (
          <div>
            <img src={picUrl} height={500} width={500} alt="dog img" />
          </div>
        )}
        <button disabled={loading} onClick={this.nextHandler}>
          Next
        </button>
      </div>
    );
  }
}

export default DogPics;
