// React
import React from "react";


function App({ names }) {
  return (
    <ul>
      {names.map((entry) => 
        <li key={entry.id} className={entry.sex}><button>{entry.name}</button></li>
      )}
    </ul>
  );
}

export default App;
