// import React from "react";
// import ConditionalRender from "./session4/ConditionalRender";
// import WithFunction from "./session4/WithFunctions";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//   }
//   inc = () => {
//     this.setState((currentState, currentProps) => {
//       return { count: currentState.count + 10 };
//     });
//   };

//   render() {
//     const { count } = this.state;
//     return (
//       <div>
//         {/* <h1>{count}</h1>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           +1
//         </button>
//         <button onClick={this.inc}>+10</button>
//         <button onClick={() => this.setState({ count: this.state.count - 1 })}>
//           -1
//         </button> */}
//         {/* <WithFunction diff={1} />
//         <WithFunction diff={10} /> */}
//         {/* <ConditionalRender /> */}
//       </div>
//     );
//   }
// }
// export default App;

// import SuperheroCheckbox from "./SuperheroCheckbox";
// const superheroes = [
//   { id: "a2jdkjd", name: "Winter Soldier" },
//   { id: "jdkdjk1", name: "Iron Man" },
//   { id: "b3dkdj2", name: "Black Widow" },
//   { id: "uniqId", name: "Spider-man" },
//   { id: "uniqye", name: "Hulk" },
//   { id: "unasad", name: "Thor" }
// ];

// export default function App() {
//   return (
//     <div>
//       {superheroes.map((superhero) => (
//         <SuperheroCheckbox name={superhero.name} key={superhero.id} />
//       ))}

//       {/* <SuperheroCheckbox name={superheroes[1].name} />
//       <SuperheroCheckbox name={superheroes[2].name} /> */}
//     </div>
//   );
// }

import React, { useState } from "react";
import SuperheroCheckbox from "./SuperheroCheckbox";

const data = [
  { id: "jdkdjk1", name: "Iron Man" },
  { id: "b3dkdj2", name: "Black Widow" },
  { id: "uniqIda", name: "Shaktimaan" },
  { id: "anOtuniqId", name: "Goku" },
  { id: "a2jdkjd", name: "Winter Soldier" }
];

export default function App() {
  const [superheroes, setSuperheroes] = useState(data); // State
  const shuffleSuperheroesArray = () => {
    // https://javascript.info/task/shuffle
    const arrCopy = [...superheroes];
    arrCopy.sort(() => Math.random() - 0.5);
    setSuperheroes(arrCopy);
  };

  return (
    <div>
      <button onClick={() => shuffleSuperheroesArray()}>Shuffle array</button>
      <div>
        {superheroes.map((superhero, activeIndex) => (
          <SuperheroCheckbox name={superhero.name} key={superhero.id} />
        ))}
        {/* {superheroes.forEach((superhero, activeIndex) => (
          <SuperheroCheckbox name={superhero.name} key={superhero.id} />
        ))} */}
      </div>
    </div>
  );
}
