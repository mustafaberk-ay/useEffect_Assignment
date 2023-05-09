import React from "react";

function CountryItem({countryItem}){
    const borders = countryItem.borders
    return (<div className="country_grid_item">
        <p>Name: {countryItem.name.common}</p>
        <p>Region: {countryItem.region}</p>
        <a href={countryItem.maps.googleMaps}>Visit map here</a>
        <br/>
        <img src={countryItem.flags.png} />
    </div>)
}

export default CountryItem;