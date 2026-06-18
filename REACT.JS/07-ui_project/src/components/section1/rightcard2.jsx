import React from 'react'

const rightcard2 = () => {
  return (
    <div className='h-full w-5/22 p-4 rounded-xl bg-amber-400 
    bg-[url(https://images.unsplash.com/photo-1657258258783-c169ac71a652?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8)] bg-center bg-cover overflow-hidden
    ' >

        <div className=' flex flex-col justify-between h-full '>

        <div>
          <h2 className='bg-white h-8 text-black w-8 rounded-full   flex items-center justify-center ' > 4 </h2>
        </div>
   
       
       <div className=' flex flex-col justify-around  h-1/2'>
         <p className='  leading-5   text-white capitalize  text-shadow-2xs  ' >Experiment with Angles: Try holding the phone upside down for low-angle shots to create more dramatic perspectives.</p>


         <div className=' flex  justify-around   '>

         <button  className=' uppercase bg-[#40739e] rounded-3xl py-2 px-6 ' >setisfid  </button>


         <button  className='bg-[#40739e] rounded-3xl py-2 px-5' >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
         </button>
         

        </div>   
         
       </div>


        </div>

    </div>
  )
}

export default rightcard2