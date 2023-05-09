import React from "react";
import CountryItem from "./CountryItem";
import "./Country.css"

function CountryList({countryList}){
    return (
    <div className="country_grid_container">
        {countryList.map((countryItem) => <CountryItem countryItem={countryItem} key={countryItem.name.common}/>)}
    </div>)
}

export default CountryList;