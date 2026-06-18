import React, { useState } from 'react'
import Navbar from './componants/Navbar'

const App = () => {
  
  const [theme, settheme] = useState('Light')
  return (
    <div>
      <Navbar theme={theme}>
        <h2>this is navbar</h2>
        <h2>this is practic</h2>
      </Navbar>
    </div>
  )
}

export default App