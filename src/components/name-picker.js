import React from "react";

function NamePicker({names, searchValue}) {
    const filteredNames = names.filter((entry) => 
        entry.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    
    return (
    <ul>
        {filteredNames.map((entry) => 
            <li key={entry.id} className={entry.sex}>
                <button>{entry.name}</button>
            </li>
        )}
    </ul>
    )
}

export default NamePicker;