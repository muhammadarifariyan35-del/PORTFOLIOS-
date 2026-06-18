import { Link } from "react-router-dom"
import Nave2 from "./Nave2"

const Nabvar = () => {
  return (
    <div className=' flex justify-between py-2 px-8 bg-[#111]'>
      <div className="flex items-center justify-center gap-8" >
        <h2 className=' text-3xl font-semibold ' >Rokomari.Com</h2>
      <Nave2/>
      </div>
      <div className=' flex gap-8 items-center'>
        <Link className=' text-lg font-semibold active:scale-90 ' to='/' >Home</Link>
        <Link className=' text-lg font-semibold active:scale-90 ' to='/contact' >Contact</Link>
        <Link className=' text-lg font-semibold active:scale-90 ' to='/cours' >Courses</Link>
        <Link className=' text-lg font-semibold active:scale-90 ' to='/about' >About</Link>

      </div>
    </div>
  )
}

export default Nabvar