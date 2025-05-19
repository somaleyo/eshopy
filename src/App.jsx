import { useState } from 'react'
import jojobg from '/src/assets/images/jojos-bizarre-adventure.jpg'
import './App.css'
import Stock from './components/Stock/stock'

function App() {


  return (
    <>

 
      <div className="header">
        <h1>JOJO NO KIMYOU NA BOUKEN</h1>
        <img className='bg-header' src={jojobg} alt="" />
      </div>
      <div className="card-container">
        <Stock/>
      </div>
    </>
  )
}

export default App
