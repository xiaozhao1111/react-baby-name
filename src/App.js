// React
import React from "react";

// Components
import NamePicker from "./components/name-picker";


function App({ names }) {
  return (
    <NamePicker names={names} />
  );
}

export default App;
