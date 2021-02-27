import React from 'react';
import './Population.css';

const Population = (props) => {
    console.log(props);
    const population = props.population;
    const setPopulation = population.reduce((sum, country) => sum + country.population, 0)
    return (
        <div>
            <h1>Total Population: {setPopulation}</h1>
        </div>
    );
};

export default Population;