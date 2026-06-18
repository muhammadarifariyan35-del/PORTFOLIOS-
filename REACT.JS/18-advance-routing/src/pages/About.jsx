import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const About = () => {

  
 
  return (
    <div>
      

      <div className=' flex justify-center gap-7 '>
        <Link className=' text-lg font-semibold bg-[#121] py-1 px-4 active:scale-95 rounded mt-4' to='../about/men'>Men</Link>

        <Link className=' text-lg font-semibold bg-[#121] py-1 px-4 active:scale-95 rounded mt-4 ' to='../about/Woman'>Woman</Link>

        <Link className=' text-lg font-semibold bg-[#121] py-1 px-4 active:scale-95 rounded mt-4 ' to='../about/kids'>Kids</Link>

        
      </div>
      <Outlet/>
      {/* <h1>about page</h1> */}
    </div>
  )
}

export default About