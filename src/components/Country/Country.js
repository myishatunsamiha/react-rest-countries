import React, { useState } from 'react';
import './Country.css'

const Country = (props) => {
    const { name, population, area, region, flags } = props.country;
    // console.log(props.country);
    const [power, setPower] = useState(1);
    const boostPower = () => {
        const newPower = power * 2;
        setPower(newPower);
    };

    return (
        <div className="country">
            <h3>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Region: {region}</p>
            <p>Power: {power}</p>
            <button onClick={boostPower}>Boost Power</button>
        </div >
    );

};

export default Country; 