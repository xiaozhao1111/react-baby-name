import React, {useState} from "react";

function Search() {
    const [searchName, setSearchName] =useState('Simon');
    function handleChange(event) {
        setSearchName(event.target.value)
    }
    return(
        <header>
            <input 
                type="text" 
                placeholder="Type a name ..."
                value={searchName}
                onChange={handleChange}
            />
        </header>
    )
}

export default Search;