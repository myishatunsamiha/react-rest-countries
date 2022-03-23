import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, []);

    return (
        <div>
            <h1>Countries: {countries.length}</h1>
            <div className='countries-container'>
                {
                    countries.map(country => <Country country={country} key={country.cca3}></Country>)
                }
            </div>
        </div>
    );
};


export default Countries;

// function LoadCountries() {
//     const [countries, setCountries] = useState([]);   // step-1

//     useEffect(() => {
//         fetch('https://restcountries.com/v3.1/all')
//             .then(res => res.json())
//             .then(data => setCountries(data))
//     }, []);   // step-2
//     return (
//         <div>
//             <h3>Countries: {countries.length}</h3>

//             {
//                 countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
//             }
//         </div>
//     );
// }

// function Country(props) {
//     return (
//         <div>
//             <h2>Name: {props.name}</h2>
//             <p>Population: {props.population}</p>
//         </div>
//     );
// }
