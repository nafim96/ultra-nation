import React, { useEffect, useState } from 'react';
import CountryBody from '../CountryBody/CountryBody';
import './CountryList.css';

const CountryList = () => {
    const [countries, setCountries] = useState([]);
    useEffect(async () => {
        const url = `https://restcountries.eu/rest/v2/all`;
        try {
            const promise = await fetch(url);
            const data = await promise.json();
            setCountries(data);
        }
        catch (error) {
            console.log(error);
        }
    }, [])
    return (
        <div>
            <div className="show-country">
                <h1>Country List: {countries.length}</h1>
            </div>
            <div>
                <CountryBody country={countries}></CountryBody>
            </div>
        </div>
    );
};

export default CountryList;