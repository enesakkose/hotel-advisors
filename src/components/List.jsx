import React, {useState, useEffect, useRef} from 'react'
import './List.scss'
import { BiChevronDown } from 'react-icons/bi'
import PlaceDetails from './PlaceDetails'
 
function List() {

  const [type, setType] = useState('restaurants')
  const [open ,setOpen] = useState(false)
  const menuRef = useRef()
  const options = [
    { label: 'Restaruants', value: 'Restaurants'},
    { label: 'Hotels', value: 'Hotels'},
    { label: 'Entertain', value: 'Entertain'}
  ]

  const places = [
    { name: 'Cool Places'},
    { name: 'Cool Placea'},
    { name: 'Cool Placesss'},
    { name: 'Cool Placesssss'},
    { name: 'Cool Placew'},
    { name: 'Cool Placee'},
    { name: 'Cool Placeg'},
    { name: 'Cool Placej'},
    { name: 'Cool Placel'},
    { name: 'Cool Placeş'},
    { name: 'Cool Placek'},
    { name: 'Cool Placej'},
    { name: 'Cool Placel'},
    { name: 'Cool Placeş'},
    { name: 'Cool Placej'},
    { name: 'Cool Placel'},
    { name: 'Cool Placeş'},
    { name: 'Cool Placej'},
    { name: 'Cool Placel'},
    { name: 'Cool Placeş'}
  ]

  const submit = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    let handler = (e) => {
      if(!menuRef.current.contains(e.target)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handler)

    return () => {
      document.removeEventListener("mousedown", handler)
    }
  })

  const selectClick = (item) => {
    setType(item.value)
    setOpen(false)
  }

  return (
    <div className='list'>
      <h2>Restaurants, Hotels & Entertainmants around you</h2>
      <form onSubmit={submit} >
          <div className="select-place">
          <h4>Type</h4>
          <button onClick={() => setOpen(!open)} className='select'>
            {type}
            <BiChevronDown fontSize={15}/>
          </button>
          
          <div ref={menuRef} className={`options ${open ? 'active' : ''}`}>
            {options.map((item) => (
              <button onClick={() => selectClick(item)} key={item.label}>{item.label}</button>
          ))}
          </div> 
          </div>

          <div className="rating-select">
            <h4>Rating</h4>
          <select className='rating-select'>
            <option value={0}>All</option>
            <option value={3}>Above 3.0</option>
            <option value={4}>Above 4.0</option>
            <option value={5}>Above 4.5</option>
          </select>
          </div>
      </form>

      <div className="place-list">
        {places.map((place, i ) => (
          <div key={i} className="place">
            <PlaceDetails place={place} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default List