import React from 'react'
import './country.css'
import { useState,useEffect } from 'react'
import Data from './data.json'
const Accrodion = () => {
    const [countries,setCountries] = useState([]);
    function Search(e){
        const word = e.target.textContent;
        const region = Data.filter(country=>country.region===word);
        setCountries(region);
    }
    useEffect(()=>{
        const names = countries.map((count)=>{
            console.log(count.name,count.population,count.region,count.capital)})
    },[countries]);
    return(
        <div className='dropDown'>
            <ul>
                <li onClick={Search}>Africa</li>
                <li onClick={Search}>Americas</li>
                <li onClick={Search}>Asia</li>
                <li onClick={Search}>Europe</li>
                <li onClick={Search}>Oceania</li>
            </ul>
            <div className='filterContainer'>
                {countries.map((country) => (
                    <div className='filterCountries'>
                        <img src={country.flags.svg} alt='Flag' className='filterFlag'/>
                        <div className='filterInfo'>
                            <h1>{country.name.common}</h1>
                            <span><h3>Population:</h3>{country.population}</span>
                            <span><h3>Region:</h3>{country.region}</span>
                            <span><h3>Capital:</h3>{country.capital}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Accrodion