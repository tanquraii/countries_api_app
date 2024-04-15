import React from 'react'
import './country.css'
import { useState,useEffect } from 'react'
import Data from './data.json'
import Countries from './Countries'
const Accrodion = () => {
    const [pag,setPag] = useState(0);
    const [countries,setCountries] = useState([]);
    function Next(){
        setPag(pag+8);
    }
    function Prev(){
        setPag(pag-8);
    }
    const firstEight = countries.slice(pag,pag+8);
    function Search(e){
        const word = e.target.textContent;
        const region = Data.filter(country=>country.region===word);
        setCountries(region);
    }
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
                <button className="buttons prev"onClick={Prev}><i class="fa fa-chevron-left" aria-hidden="true"></i></button> 
                {
                firstEight.map((country) => (
                    <div className='filterCountries'>
                        <img src={country.flags.svg} alt='Flag' className='filterFlag'/>
                        <div className='filterInfo'>
                            <h1>{country.name}</h1>
                            <span><h3>Population:</h3>{country.population}</span>
                            <span><h3>Region:</h3>{country.region}</span>
                            <span><h3>Capital:</h3>{country.capital}</span>
                        </div>
                    </div>
                ))}
                <button className ="buttons next" onClick={Next}><i class="fa fa-chevron-right" aria-hidden="true"></i></button>
            </div>
        </div>
    )
}

export default Accrodion