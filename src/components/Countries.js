import React, { useEffect, useState } from 'react';
import axios from 'axios';
import data from './data.json';
import './country.css'
const Countries = () => {
    const [country,setCountry] = useState([]);
    const [name,setName] = useState("");
    const [data,setData] = useState({
        data1:'',
        data2:'',
        data3:''
    });
    const fetchData = async ()=>{
        const response = await axios.get('https://restcountries.com/v3.1/all');
        console.log(response.data[0]);
        for(let i = 0;i<4;i++){
            setCountry(response.data[i].flags.svg);
            setName(response.data[i].name.common);
            setData({...data,
                data1:response.data[i].population,
                data2:response.data[i].region,
                data3:response.data[i].capital[i]
            })
        }
        console.log(data)
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div className='countries'>
            <div className='country'>
                <img className = 'flag' src={country}/>
                <div className='info'>
                    <h1>{name}</h1>
                    <p>{data.data1}</p>
                    <p>{data.data2}</p>
                    <p>{data.data3}</p>
                </div>
            </div>
        </div>
    );
};

export default Countries;

