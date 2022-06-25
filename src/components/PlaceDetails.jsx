import React from 'react'
import './PlaceDetails.scss'

function PlaceDetails({place}) {
    
  return (
    <div className='place-details'>
        <h3>{place.name}</h3>
    </div>
  )
}

export default PlaceDetails