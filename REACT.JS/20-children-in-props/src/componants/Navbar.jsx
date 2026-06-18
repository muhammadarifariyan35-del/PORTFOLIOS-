import React from 'react'
import Nav2 from './Nav2'

const Navbar = ({children, theme}) => {
    console.log(children);
  return (
    <div className='nav' >
        <h2>Jui & ariyan.com</h2>
        {children[1]}
        <Nav2 theme={theme} />
    </div>
  )
}

export default Navbar