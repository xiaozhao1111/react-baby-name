import React from "react";

function NamePicker({names, searchValue, shortList, setShortList}) {

    // filter names including the input characters
    const filteredNames = names.
        filter((entry) => 
            entry.name.toLowerCase().includes(searchValue.toLowerCase())
        )
        .filter((entry) => !shortList.includes(entry.id));
    function addToShortList(id) {
        setShortList([...shortList, id])
    }

    return (
    <ul>
        {filteredNames.map((entry) => 
            <li key={entry.id} className={entry.sex}>
                <button onClick={() => addToShortList(entry.id)}>{entry.name}</button>
            </li>
        )}
    </ul>
    )
}

export default NamePicker;