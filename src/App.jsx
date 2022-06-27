import { useState, useEffect } from 'react'
import Header from './components/Header'
import Map from './components/Map'
import List from './components/List'
import { getPlacesData } from './api'



function App() {
  
  const [places , setPlaces] = useState([])
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState([])
  console.log(places)
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude}}) => {
      setCoordinates( {lat: latitude, lng: longitude})
    })
  }, [])
  

  useEffect(()=> {
    
    getPlacesData(bounds.sw, bounds.ne)
    .then((data) => {
      setPlaces(data)
    })
  }, [coordinates, bounds])

  return (
    <div className="App">
      <Header/>
      <div className="container">
        <List places={places}/>
        <Map coordinates={coordinates} setCoordinates={setCoordinates} setBounds={setBounds} />
      </div>
    </div>
  )
}

export default App
