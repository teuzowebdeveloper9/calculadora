import React, { useState } from 'react'
import './mainStyles.css'
import Button from '../components/buttons/buttons'
import Button2 from '../components/buttons/buttons2'
import Button3 from '../components/buttons/buttons3'
import Button4 from '../components/buttons/buttons4'


function App() {
  const [currentNumber,setCurrentNumber] = useState(0)

  const handleNumber = (number) => {
    setCurrentNumber((prev) => {
    
    })
  }
  
  return (
    <div className="container">
      <div className="left-light"></div>
      <div className="right-light"></div>
      <div className='input'>
       <input placeholder='calculadora'  disabled value={currentNumber}></input>
      </div>
     
      <Button4 />
      <Button />
      <Button2 />
      <Button3 />
      
 
  
    </div>
  )
}

export default App
