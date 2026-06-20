// import React from 'react'
import { Card } from './components/card.jsx'
import Navbar from './components/navbar.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <div style={{display:"flex"}}>
        <Card />
      </div>
    </div>
    
  )
}

export default App