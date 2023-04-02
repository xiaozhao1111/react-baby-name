import React from "react";
import NameList from "./name-list";

function NamePicker({names, searchValue, shortList, setShortList}) {

    // filter names including the input characters
    const filteredNames = names.
        filter((entry) => 
            entry.name.toLowerCase().includes(searchValue.toLowerCase())
        )
    // filter names which is not already in the short list
        .filter((entry) => !shortList.includes(entry.id));
    function addToShortList(id) {
        setShortList([...shortList, id])
    }

    return (
        <NameList nameList={filteredNames} onItemClick={addToShortList} />
    )
}

export default NamePicker;