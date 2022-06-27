import React from 'react'
import GoogleMapReact from 'google-map-react'
import { GrLocation } from 'react-icons/gr'
import Rating from '@material-ui/lab/Rating'
import './Map.scss'
function Map({ setCoordinates, setBounds, places, setChildClicked }) {



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
        onChildClick={(child) => setChildClicked(child)}
      >
        {places?.map((place, i) => (
          <div
           className='on-map' 
           key={i}
           lat={Number(place.latitude)}
           lng={Number(place.longitude)}
           >
            <div className='on-map-card'>
              <img src={place.photo ? place.photo.images.small.url : 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHN8ZW58MHx8MHx8&w=250&q=80'} className='on-map-card-img'/>
              <h4>{place?.name}</h4>
              <Rating size='small' value={Number(place.rating)} readOnly/>
            </div>
            
          </div>
        ))}
      </GoogleMapReact>
    </div>
  )
}

export default Map