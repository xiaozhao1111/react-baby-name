// React
import React, { Fragment } from "react";

// Components
import NamePicker from "./components/name-picker";
import Search from "./components/search";


function App({ names }) {
  return (
    <Fragment>
      <Search />
      <NamePicker names={names} />
    </Fragment>
  );
}

export default App;
