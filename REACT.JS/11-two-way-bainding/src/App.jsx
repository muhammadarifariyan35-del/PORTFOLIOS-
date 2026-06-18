import React, { useState } from 'react'

const App = () => {

  const [first, setfirst] = useState('')

  const submit = (e) => {
    e.preventDefault()
    console.log(first);
    setfirst('')
  }




  return (
    <div>

    <form action=""  onSubmit={submit}
    
    
    >
      <input type="text" 
      placeholder='Enter something'
      value={first}
      onChange={(e) => {
        setfirst(e.target.value)
      }}
      
      />

      <button type="submit">submit</button>
    </form>

    </div>
  )
}

export default App