import React from 'react'
import GoogleMapReact from 'google-map-react'
import './Map.scss'
function Map({ setCoordinates, setBounds}) {

  const coordinates = {lat: 0, lng: 0}

  return (
    <div className='map'>
      <GoogleMapReact
        bootstrapURLKeys={{key: 'AIzaSyAFtjxZia-XzghVAx7acRaQh4nL0PjKM_Q'}}
        defaultCenter={[34.0522, -118.2437]}
        center={[34.0522, -118.2437]}
        defaultZoom={14}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng})
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw})
      }}
      >

      </GoogleMapReact>
    </div>
  )
}

export default Map