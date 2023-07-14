import logo from "./logo.svg";
import "./App.css";
// import React from "react";

// function App() {
//   return (
//     <div>
//       <h1>Makers </h1>    // ! jsx
//       <h2>Bootcapm</h2>
//     </div>
//   );
// }

// function App() {
//   return React.createElement(
//     "div",
//     { id: "makers", className: "Bootcamp" },
//     React.createElement("h1", null, "Nakers Bootcamp")    // ! js
//   );
// }

import React from "react";
import Greet from "./components/Greet/Greet";

const App = (props) => {
  console.log(props);
  return (
    <div>
      <Greet name="Aibek" />
      <Greet name="Ulan" />
      <Greet name="Nursultan" />
    </div>
  );
};

export default App;
