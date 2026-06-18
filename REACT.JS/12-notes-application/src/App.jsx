
import React, { useState } from 'react'

const App = () => {

const [title, setfirst] = useState('')
const [frist, setTitle] = useState('')

const [Task, setTask] = useState([])


const submitHandler = (e) => {
e.preventDefault()

const copyTask = [...Task]
copyTask.push({title, frist})
setTask(copyTask)
console.log(copyTask);

 setfirst('')
 setTitle('')
}


const deleteNote = (idx) => {
const copyTask = [...Task]
copyTask.splice(idx,1)
setTask(copyTask)

}


  return (
    <div className=' text-white p-3 ' >

    <form onSubmit={(e) => {
      submitHandler(e)
    }}
    className=' flex  flex-col  mx-auto my-4 gap-4 p-10 max-w-230 w-[90%]
     border-b-6  border-[#D6A2E8] border-double' >
      <h1 className='  capitalize   text-4xl tracking-widest  '> add your notes</h1>



      <input 
      onChange={(i) => {

        setfirst(i.target.value)
      }}
      value={title}
      type="text" 
      placeholder='Enter Notes Heading' 
      className=' px-5 py-2 border-1 rounded-lg outline-none
      font-medium'/>



      <textarea 
      onChange={(i) => {
        setTitle(i.target.value)
      }}
      value={frist}
      placeholder='Write Details Here'
      className='  px-5 py-2 border-1 rounded-lg h-40 max-h-50 outline-none  font-medium
      '></textarea>



      <button className=' bg-white active:scale-97 active:bg-[#9aecdcce]   text-black px-2 py-1  rounded-xl  uppercase   font-medium'>Add Notes</button>



    </form>


    <h1 className=' py-2  text-center  uppercase   text-4xl mt-20  
      text-[#6D214F]  font-extrabold '   >recent notes...</h1>



    <div className=' mx-3 md:flex md:flex-wrap md:gap-1 md:justify-center md:items-center mt-2 p-2'>

  
    {Task.map(function(elem,idx){

      return <div key={idx}  className= 'h-90 w-70 bg-no-repeat rounded-lg mx-auto my-1 py-10 px-5 px bg-[url(./notes.png)] bg-contain flex flex-col justify-between'>
        <div>
      <h2 className=' text-black font-extrabold  text-xl capitalize mb-1 ' >{elem.title }</h2>

      <p className=' py-3 capitalize font-extralight text-sm text-black'  > {elem.frist} </p>
        </div>
      <button id='btn' onClick={() => {
        deleteNote(idx)
      } }  className=' cursor-pointer ' >
        <svg 
     
        xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-icon lucide-trash"><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></button>
    </div>
    } )}
    </div>



    </div>
  )
}

export default App