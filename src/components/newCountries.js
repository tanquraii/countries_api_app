import React, { useState, useEffect } from 'react';
import './country.css';
import Data from './data.json';
import Accrodion from './Accrodion';
const newCountries = () => {
    const [region, setRegion] = useState([]);

    function Search(e) {
        const word = e.target.textContent;
        const countries = Data.filter(country => country.region === word);
        setRegion(countries);
    }

    return (
        <div className='dropDown'>
            <ul>
                <li onClick={Search}>Africa</li>
                <li onClick={Search}>Americas</li>
                <li onClick={Search}>Asia</li>
                <li onClick={Search}>Europe</li>
                <li onClick={Search}>Oceania</li>
            </ul>

            {/* Display region data */}
        </div>
    );
}

export default newCountries;