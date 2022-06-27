import { useState, useEffect } from 'react'
import Header from './components/Header'
import Map from './components/Map'
import List from './components/List'
import { getPlacesData, getWeatherData } from './api'



function App() {
  
  const [places , setPlaces] = useState([])
  const [filteredPlaces, setFilteredPlaces] = useState([])
  const [coordinates, setCoordinates] = useState({})
  const [type, setType] = useState('restaurants')
  const [bounds, setBounds] = useState([])
  const [childClicked, setChildClicked] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [rating, setRating] = useState('')
  const [weatherData, setWeatherData] = useState([])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude}}) => {
      setCoordinates( {lat: latitude, lng: longitude})
    })
  }, [])
  
  useEffect(()=> {
    const filteredPlaces = places.filter((place) => place.rating > rating)

    setFilteredPlaces(filteredPlaces)
  }, [rating])

  useEffect(()=> {
    setIsLoading(true)

    getWeatherData(coordinates.lat, coordinates.lng)
      .then((data)=> {
        setWeatherData(data)
      })

    getPlacesData(type, bounds.sw, bounds.ne)
    .then((data) => {
      setPlaces(data)
      setFilteredPlaces([])
      setIsLoading(false)
    })
  }, [type, coordinates, bounds])

  return (
    <div className="App">
      <Header setCoordinates={setCoordinates}/>
      <div className="container">
        <List 
          places={filteredPlaces.length ? filteredPlaces : places} 
          childClicked={childClicked} 
          isLoading={isLoading} 
          type={type} 
          setType={setType}
          rating={rating}
          setRating={setRating}
        />
        <Map 
          coordinates={coordinates} 
          setCoordinates={setCoordinates} 
          setBounds={setBounds} 
          places={filteredPlaces ? filteredPlaces : places} 
          setChildClicked={setChildClicked}
          weatherData={weatherData}
        />
      </div>
    </div>
  )
}

export default App
