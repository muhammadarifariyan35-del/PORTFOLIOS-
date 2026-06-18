import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div id="nav">
          <h2>ROKOMARI.COM</h2>
          <div>
            <Link to='/' >home</Link>
            <Link to='/about' >about</Link>
            <Link to='/Contact'  >contact</Link>
            <Link to='/product' >product</Link>
          </div>
        </div>
  )
}

export default Navbar