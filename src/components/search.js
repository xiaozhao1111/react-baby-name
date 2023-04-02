import React, {useEffect, useRef} from "react";

function Search({searchValue, setSearchValue}) {
    
    // use inputRef to focus on the input element when the page is loaded
    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    function handleChange(event) {
        setSearchValue(event.target.value)
    }

    return(
        <header>
            <input 
                ref={inputRef}
                type="text" 
                placeholder="Type a name ..."
                value={searchValue}
                onChange={handleChange}
            />
        </header>
    )
}

export default Search;