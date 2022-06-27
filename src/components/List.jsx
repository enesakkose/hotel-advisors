import React, {useState, useEffect, useRef, createRef} from 'react'
import './List.scss'
import { BiChevronDown } from 'react-icons/bi'
import { CircularProgress } from '@material-ui/core'
import PlaceDetails from './PlaceDetails'
 
function List({places, childClicked, isLoading, type, setType, rating, setRating}) {


  const [open ,setOpen] = useState(false)
  const [elRefs, setElRefs] = useState([])
  const menuRef = useRef()
  const options = [
    { label: 'Restaruants', value: 'restaurants'},
    { label: 'Hotels', value: 'hotels'},
    { label: 'Attractions', value: 'attractions'}
  ]

  useEffect(() => {
    const refs = Array(places?.length).fill().map((_, i) => elRefs[i] || createRef())

    setElRefs(refs)
  }, [places])

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
      {isLoading ? (
        <div className="list-loading">
          <CircularProgress />
        </div>
        
      ): (
        <>
        
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
          <select value={rating} onChange={(e) => setRating(e.target.value)} className='rating-select'>
            <option value={0}>All</option>
            <option value={3}>Above 3.0</option>
            <option value={4}>Above 4.0</option>
            <option value={5}>Above 4.5</option>
          </select>
          </div>
      </form>

      <div className="place-list">
        {places?.map((place, i ) => (
          <div key={i} className="place">
            <PlaceDetails
             place={place} 
             selected={Number(childClicked) === i}
             refProp={elRefs[i]}
             />
          </div>
        ))}
      </div>
      </>
      )}
    </div>
  )
}

export default List