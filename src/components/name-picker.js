import React from "react";

function NamePicker({names}) {
    return (
    <ul>
        {names.map((entry) => 
            <li key={entry.id} className={entry.sex}>
                <button>{entry.name}</button>
            </li>
        )}
    </ul>
    )
}

export default NamePicker;