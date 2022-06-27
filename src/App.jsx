import { useState, useEffect } from 'react'
import Header from './components/Header'
import Map from './components/Map'
import List from './components/List'
import { getPlacesData } from './api'



function App() {
  
  const [places , setPlaces] = useState([])
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState([])
  const [childClicked, setChildClicked] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude}}) => {
      setCoordinates( {lat: latitude, lng: longitude})
    })
  }, [])
  

  useEffect(()=> {
    setIsLoading(true)
    getPlacesData(bounds.sw, bounds.ne)
    .then((data) => {
      setPlaces(data)
      setIsLoading(false)
    })
  }, [coordinates, bounds])

  return (
    <div className="App">
      <Header/>
      <div className="container">
        <List places={places} childClicked={childClicked} isLoading={isLoading}/>
        <Map coordinates={coordinates} setCoordinates={setCoordinates} setBounds={setBounds} places={places} setChildClicked={setChildClicked} />
      </div>
    </div>
  )
}

export default App
