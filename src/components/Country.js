import React from 'react'
import './country.css'
import { useState } from 'react'
const Country = () => {
    const [query,setQuery] = useState("");
    function changeQuery(event){
        setQuery(event.target.value);
        console.log(query);
    }
  return (
    <div className='container'>
      <nav>
        <div className='where'>Where in the world?</div>
        <div className='dmode'><i class="fa fa-moon-o" aria-hidden="true"></i>Dark Mode</div>
        <div className='search'>
            <i class="fa fa-search" aria-hidden="true"></i>

            <input onChange = {changeQuery} type='text' placeholder='Search for a country...'/>
        </div>
      </nav>
    </div>
  )
}

export default Country
