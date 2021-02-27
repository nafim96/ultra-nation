import React from 'react';
import './CountryBody.css';

const CountryBody = (props) => {
    const countries = props.country;
    const addOnClick = props.handleAddCountry;
    return (
        <div>
            <div className="country-container">
                {
                    countries.map(country => {
                        const {
                            name, flag, alpha2Code, alpha3Code,
                            area, capital, timezones, population, region,
                            subregion, languages, latlng
                        } = country;
                        return (
                            <div className="country-list">
                                <h1>{name}</h1>
                                <img src={flag} alt="" srcset="" />
                                <h2>Alpha 2 Code: {alpha2Code}</h2>
                                <h2>Alpha 3 Code: {alpha3Code}</h2>
                                <h1>Area: {area}</h1>
                                <h2>Capital: {capital}</h2>
                                <h3>Time Zone: {timezones[0]}</h3>
                                <h2>Population: {population}</h2>
                                <h2>Region: {region}</h2>
                                <h2>Sub-Region: {subregion}</h2>
                                <h2>Language: {languages[0].nativeName}</h2>
                                <h3>Lat: {latlng[0], latlng[1]}</h3>

                                <button onClick={()=>addOnClick(country)}>Add Country</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default CountryBody;