import React from 'react'

const Navbar = (props) => {
  return (
    <div>
        
        <button onClick={() => {
            props.settheme('Dark')
        }} > change them</button>
    </div>
  )
}

export default Navbar