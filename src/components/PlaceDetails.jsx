import React from 'react'
import { GrLocation } from 'react-icons/gr'
import { BsTelephone } from 'react-icons/bs'
import './PlaceDetails.scss'

function PlaceDetails({place}) {

  return (
    <div className='place-details'>
        <div className="place-details-card">
          <img src={place.photo ? place.photo.images.large.url : 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHN8ZW58MHx8MHx8&w=250&q=80'} alt="" className="place-details-card-img" />
          <div className="place-details-card-text">
            <h3>{place.name}</h3>
            <div className='place-details-card-text-info flex'>
              <h4>Price</h4>
              <h4>{place.price_level}</h4>
            </div>
            <div className='place-details-card-text-info flex'>
              <h4>Ranking</h4>
              <h4>{place.ranking}</h4>
            </div>

            {place?.awards?.map((award) => (
              <div className='place-details-card-text-award flex'>
                <img src={award.images.small} alt={award.display_name} />
                <h4>{award.display_name}</h4>
              </div>
            ))}

            {place?.cuisine?.map( ({name}) => (
              <div key={name} className='place-details-card-text-chip flex'>
                {name}
              </div>
            ))}

            {place?.address && (
              <div className='place-details-card-text-address flex'>
                <GrLocation/>
                <h4>{place.address_obj.street1}, {place.address_obj.city}</h4>
              </div>
            )}

            {place?.phone && (
              <div className='place-details-card-text-phone flex'>
                <BsTelephone/>
                {place.phone}
              </div>
            )}

            <div className='place-details-card-text-actions'>
              <button className='place-details-card-text-actions-btn' onClick={() => window.open(place.web_url, '_blank')}>
                Trip Advisor
              </button>
              <button className='place-details-card-text-actions-btn' onClick={() => window.open(place.website, '_blank')}>
                Website
              </button>
            </div>
          </div>
          
        </div>
        
    </div>
  )
}

export default PlaceDetails