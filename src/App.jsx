import { useState, useEffect } from 'react'
import Header from './components/Header'
import Map from './components/Map'
import List from './components/List'
import { getPlacesData } from './api'



function App() {
  
  const [places , setPlaces] = useState([])
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState(null)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude}}) => {
      setCoordinates( {lat: latitude, lng: longitude})
    })
  }, [])
  
  // you will bounce parametre to api
  useEffect(()=> {
    
    getPlacesData()
    .then((data) => {
      console.log(data)
      setPlaces(data)
    })
  }, [coordinates, bounds])

  return (
    <div className="App">
      <Header/>
      <div className="container">
        <List/>
        <Map coordinates={coordinates} setCoordinates={setCoordinates} setBounds={setBounds} />
      </div>
    </div>
  )
}

export default App
