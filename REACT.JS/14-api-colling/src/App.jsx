import axios from "axios"
import { useState } from "react"

const App = () => {

const [data, setdata] = useState([])


const getData = async () => {
const respoce = await axios.get('https://picsum.photos/v2/list')

setdata(respoce.data)
}

  return (
    <div>

      <button onClick={getData} >Get Data</button>
      <div>
        {data.map(function(elem,idx){
          return <div id="imgId" key={idx} >
            <img  src={elem.download_url} alt={elem.author} />
            {/* <p>{elem.author}</p> */}
          </div>
        })}
      </div>
    </div>
  )
}

export default App