import React from 'react'

const card = (props) => {
console.log(props.user, props.age);
  return (
    <div className='parent'>
    
       <div className="card">
      <img src={props.img} alt="" />
      <h1> name is {props.user} </h1>
      <p> {props.post} </p>
      <button className="btn"> {props.age} is the age </button>
      </div>
    </div>
  )
}

export default card;