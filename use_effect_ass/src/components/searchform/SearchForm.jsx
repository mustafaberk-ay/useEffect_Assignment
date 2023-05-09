import React from "react";

function SearchForm({setUserInput}){
    function onChangeHandler(event){
        setUserInput(event.target.value)
    }

    return (<div>
        <form>
            <label>Please enter the product name: <input type="text" name="userInput" onChange={onChangeHandler}></input></label>
            <button>Search</button>
        </form>
    </div>)
}

export default SearchForm;