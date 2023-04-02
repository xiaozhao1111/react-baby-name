import React, { Fragment } from "react";
import NameList from "./name-list";

function ShortList({names, shortList, setShortList}) {

const shortListedNames = names.filter((entry) => shortList.includes(entry.id));

// declaration a value to check if the shortlist is empty
const hasName = shortList.length > 0;

function removeFromShortList(id) {
    setShortList(shortList.filter((i) => i !== id));
}

    return (
    <div className="short-list">
        <h2>{hasName ? "Your shortlist: " : "Click on a name to shortlist it"}</h2>
        <Fragment>
            <NameList nameList={shortListedNames} onItemClick={removeFromShortList} />
            <hr />
        </Fragment>
        
    </div>
    );
}

export default ShortList;