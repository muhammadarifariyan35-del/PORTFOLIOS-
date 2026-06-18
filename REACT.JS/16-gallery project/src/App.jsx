  import axios from "axios"
import { useEffect, useState } from "react"
  const App = () => {
    const [userData, setUserData] = useState([])
    const [index, setindex] = useState(1)


    const getData = async () => {
      const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=100`)
      setUserData(response.data)
      
    }


    useEffect(function(){
      getData()
    },[index])

    let printUserData = (
    <h1 className="text-sm font-semibold text-white  mt-[49%] capitalize" >
        loading...
      </h1>
    )

    if(userData.length > 0){
      printUserData = userData.map(function(elem,idx){
        return <a href={elem.url} target="_blank">
          <div key={idx} className=" overflow-hidden h-60 max-w-60  bg-[#171f1eaa] rounded-lg px-0  backdrop-blur-3xl " >
          <img className="h-[90%] object-cover rounded-lg" src={elem.download_url} alt="" />
          <h2 className=" text-center text-amber-200 font-extralight mb-0.5">{elem.author}</h2>
        </div>
        </a>
      })
    }




    return (
      <div className='  text-white'>
        
        <button onClick={getData} className='bg-[#9aecdc30] text-black backdrop-blur-3xl font-semibold text-xl uppercase px-40 py-2 rounded mb-6  active:scale-95  ml-10 mt-4 hidden
        '>get data</button>

        
        <div className=" flex justify-center items-center p-4 gap-30 " >

          <button style={{opacity: index === 1 ? 0.5 : 1 }}  onClick={() => {
            console.log('prev button clicked');
            if(index > 1){
              setindex(index - 1)
              setUserData([])
            }
          }} className=" bg-amber-300 text-black py-2 px-4 rounded-lg capitalize font-semibold text-sm cursor-pointer active:scale-95 " >prev</button>

          <h1 className="fixed ml-0 text-md font-extralight m-2 text-white  p-0.5 px-3 rounded " >Page {index}</h1>
          
          <button style={{opacity: index === 10 ? 0.5 : 1 }}    onClick={() => {
            console.log('next button clicked');
            if(index < 10){
              setindex(index + 1)
              setUserData([])
            }
          }} className=" bg-amber-300 text-black py-2 px-4 rounded-lg capitalize font-semibold text-sm cursor-pointer active:scale-95 " >next</button>

        </div>


        <div className=" flex flex-wrap  justify-center gap-5 p-2" >
          {printUserData}
        </div>

      </div>
    )
  }

  export default App
