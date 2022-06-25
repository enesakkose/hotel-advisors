import React from 'react'
import GoogleMapReact from 'google-map-react'
import './Map.scss'
function Map() {

  const coordinates = {lat: 0, lng: 0}

  return (
    <div className='map'>
      <GoogleMapReact
        bootstrapURLKeys={{key: 'AIzaSyAFtjxZia-XzghVAx7acRaQh4nL0PjKM_Q'}}
        defaultCenter={[34.0522, -118.2437]}
        center={[34.0522, -118.2437]}
        defaultZoom={14}
      
      >

      </GoogleMapReact>
    </div>
  )
}

export default Map