import React from 'react'
import './country.css'
import Accrodion from './Accrodion'
import Query from './Query'
import { useState } from 'react'
import Countries from './Countries'

const Country = () => {
  const [show,setShow] = useState(false);
  return (
    <div className='container'>
      <nav>
        <div className='where'>Where in the world?</div>
        <div className='dmode'><i class="fa fa-moon-o" aria-hidden="true"></i>Dark Mode</div>
        
        <div className='filter' onClick={()=>
          setShow((show)=>!show)
        }>
          Filter by Region
          <i class="fa-solid fa-caret-down"></i>
        </div>
        
        <Query/>
      </nav>
      {
      show && <Accrodion/>//if the show value is true then the component will show otherwise it wont
      }
      <Countries/>
    </div>
  )
}

export default Country
