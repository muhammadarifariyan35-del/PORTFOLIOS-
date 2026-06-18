import React from 'react'

const Nav2 = (props) => {
  return (
    <div className='nav2' >
        <h3>home</h3>
        <h3>about</h3>
        <h3>contact</h3>
        <h3>services</h3>
        <h3>{props.theme}</h3>
    </div>
  )
}

export default Nav2