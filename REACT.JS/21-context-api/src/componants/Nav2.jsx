import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'


const Nav2 = () => {

  const [theme, settheme]  = useContext(ThemeDataContext)
  
  return (
    <div className='nav2' >
        <h3>home</h3>
        <h3>about</h3>
        <h3>contact</h3>
        <h3>services</h3>
        <h3>{theme}</h3>
    </div>
  )
}

export default Nav2