import React from 'react';
import './CountryBody.css';

const CountryBody = (props) => {
    const countries = props.country;
    console.log(countries);
    return (
        <div>
            <div className="country-container">
                {
                    countries.map(country=>{
                        return(
                            <div className="country-list">
                                <h1>{country.name}</h1>
                                <img src={country.flag} alt="" srcset=""/>
                                <h2>Alpha 2 Code: {country.alpha2Code}</h2>
                                <h2>Alpha 3 Code: {country.alpha3Code}</h2>
                                <h1>Area: {country.area}</h1>
                                <h2>Capital: {country.capital}</h2>
                                <h3>Time Zone: {country.timezones[0]}</h3>
                                <h2>Population: {country.population}</h2>
                                <h2>Region: {country.region}</h2>
                                <h2>Sub-Region: {country.subregion}</h2>
                                <h2>Language: {country.languages[0].nativeName}</h2>
                                <h3>Lat: {country.latlng[0],country.latlng[1]}</h3>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default CountryBody;