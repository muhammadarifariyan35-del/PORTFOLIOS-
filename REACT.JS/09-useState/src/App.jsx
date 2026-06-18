import { useState } from "react"


const App = () => {

const [first, setfirst] = useState([100, 234])

  function clickdata(){
  const a = [...first]
  a[0] = 'hello'
  a[1] = 'ariyan'
  setfirst(a)
  }


  return (
    <>
    
    
    
    <div className="dd">
      <h1> {first[0]} {first[1]} 
      </h1>
    </div>
    
    <button onClick={clickdata} >click here now to see the change</button>
    
    
    
    
    </>
      
  )

}
export default App