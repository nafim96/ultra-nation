import React, { useEffect, useState } from 'react';
import CountryBody from '../CountryBody/CountryBody';
import Population from '../Population/Population';
import './CountryList.css';

const CountryList = () => {
    const [countries, setCountries] = useState([]);
    const [addCountry, setAddCountry] = useState([]);
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
    }, []);

    const handleAddCountry = (country) => {
        const newAddCountry = [...addCountry, country];
        setAddCountry(newAddCountry);
    }
    return (
        <div>
            <div className="show-country">
                <h1>Country List: {countries.length}</h1>
                <h3>country Added:{addCountry.length}</h3>
                <Population population={addCountry}></Population>
            </div>
            <div>
                <CountryBody country={countries} handleAddCountry={handleAddCountry}></CountryBody>
            </div>
        </div>
    );
};

export default CountryList;