import React from 'react'
import Client1 from '../img/1.png'
import Client2 from '../img/client2.jpg'
import Client3 from '../img/client3.png'

function Clients() {
  return (
    <div className='text-center flex flex-col items-center text-black text-2xl'>
  
      <div className='bg-[#e2dbfc] w-full py-2'>  Meet our <span className='font-semibold'> Clients </span> </div>
  
      <div className='flex justify-center md:justify-evenly items-center gap-10 mt-10 flex-wrap w-full md:w-[80%]'>
        <img src={Client1} alt="clients1" className='w-[50%] md:w-40 rounded-md' />
        <img src={Client2} alt="clients1" className='w-[50%] md:w-40 rounded-md' />
        <img src={Client3} alt="clients1" className='w-[50%] md:w-40 rounded-md' />
      </div>
    </div>
  )
}

export default Clients
