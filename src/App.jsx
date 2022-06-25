import { useState } from 'react'
import Header from './components/Header'
import Map from './components/Map'
import List from './components/List'



function App() {
  

  return (
    <div className="App">
      <Header/>
      <div className="container">
        <List/>
        <Map/>
      </div>
    </div>
  )
}

export default App
