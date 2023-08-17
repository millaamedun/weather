import React from 'react'
import spinner from '../public/assets/spinner.gif'
import Image from 'next/image'

const Spinner = () => {
  return (
    <>
    <div className='bg-[#f1f2f3] w-full h-screen flex flex-col justify-center items-center'>
        <Image className='w-[100px] m-auto block' src={spinner} alt='loading...' />
    </div>
      
    </>
  )
}

export default Spinner
