import Data from './data.json';
import './country.css'
import { useState } from 'react';
const Countries = () => {
    const [pag,setPag] = useState(0)
    const firstEight = Data.slice(pag,pag+8);
    function Next(){
        setPag(pag+8);
    }
    function Prev(){
        setPag(pag-8);
    }
    return (
        <>
            <button className="buttons prev"onClick={Prev}><i class="fa fa-chevron-left" aria-hidden="true"></i></button>
                
            <div className='countries'>
                {
                    firstEight.map(country=>{
                        return (
                            <div className='country'>
                                <img src={country.flags.svg} alt='altushka'/>
                                <div className='info'>
                                    <h1>{country.name}</h1>
                                    <span><h3>Population:</h3>{country.population}</span>
                                    <span><h3>Region:</h3>{country.region}</span>
                                    <span><h3>Capital:</h3>{country.capital}</span>
                                </div>
                            </div>
                        )
                    })

                }
                
            </div> 
            <button className ="buttons next" onClick={Next}><i class="fa fa-chevron-right" aria-hidden="true"></i></button>
        </> 
    );
    

    
    
    
};

export default Countries;

