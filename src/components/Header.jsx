import React, {useState} from 'react'
import { Autocomplete } from '@react-google-maps/api';
import { AiOutlineSearch } from 'react-icons/ai'

import './Header.scss'

function Header({setCoordinates}) {

  const [autocomplete, setAutocomplete] = useState(null)

  const onLoad = (autoC) => setAutocomplete(autoC)
  
  const onPlaceChanged = () => {
    const lat = autocomplete.getPLace().geometry.location.lat()
    const lng = autocomplete.getPLace().geometry.location.lng()

    setCoordinates({lat, lng})
  }

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
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}> 
          <input className='search' type="text" placeholder='Search...' />
          </Autocomplete>
        </div>
        
      </div>
    </header>
  )
}

export default Header