import React from 'react'
import { useState } from 'react';
const Query = () => {
    const [query,setQuery] = useState("");
    function changeQuery(event){
        setQuery(event.target.value);
        console.log(query);
    }
    return(
    <div className='search'>
        <i class="fa fa-search" aria-hidden="true"></i>

        <input onChange = {changeQuery} type='text' placeholder='Search for a country...'/>
        
    </div>
    )
}

export default Query
