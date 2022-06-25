import React from 'react'
import { Autocomplete } from '@react-google-maps/api';
import { AiOutlineSearch } from 'react-icons/ai'

import './Header.scss'

function Header() {

  return (
    <header className='header'>
      <div className="header-logo">
        <h2>Travel Advisors</h2>
      </div>

      <div className="header-search">
        <h3>Explore new places</h3>
        <div className="header-search-bar">
          <div className="search-icon">
            <AiOutlineSearch fontSize={18}/>
          </div>
          {/* <Autocomplete> */}
          <input className='search' type="text" placeholder='Search...' />
          {/* </Autocomplete> */}
        </div>
        
      </div>
    </header>
  )
}

export default Header