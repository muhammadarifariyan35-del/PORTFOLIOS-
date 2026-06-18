import React, { useState } from 'react'
import Navbar from './componants/Navbar'
const App = () => {
  const [Them, setThem] = useState('Light')
  return (
    <div >
      <h1>them is {Them}</h1>
    <Navbar theme={Them} settheme={setThem} />
    </div>
    
  )
}

export default App