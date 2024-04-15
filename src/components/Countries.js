import Data from './data.json';
import './country.css'
const Countries = () => {
    const firstEight = Data.slice(0,8);
    return (
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
    );
    

    
    
    
};

export default Countries;

