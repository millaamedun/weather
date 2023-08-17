import React from 'react'
import Image from 'next/image'

const weather = ({data}) => {        
    console.log(data)
  return (
    <div className='relative flex flex-col justify-between max-w-[300px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10 md:max-w-[500px]'>
        <div className='relative flex justify-between pt-12 mt-32'>
            <div className='flex flex-col justify-center'>
                <Image width={100} height={100} src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt='weather icon'/>
                <p className='text-center text-2xl'>{data.weather[0].main}</p>                
            </div>
            <p className='text-8xl md:text-9xl'>{(data.main.temp/10).toFixed(0)}&#176;</p>
        </div>
        <div className='bg-black/50 relative p-4 py-16 rounded-md md:p-8py-16'>
            <p className='text-2xl text-center pb-6'>Weather in {data.name}</p>
            <div className='flex justify-between text-center'>
                <div>
                    <p className='font-bold text-xl md:text-2xl'>{data.main.feels_like.toFixed(0)}&#176;</p>
                    <p className='text-lg md:text-xl'>Feels Like</p>
                </div>
                <div>
                    <p className='font-bold text-xl md:text-2xl'>{data.main.humidity}%</p>
                    <p className='text-lg md:text-xl'>Humidity</p>
                </div>
                <div>
                    <p className='font-bold text-xl md:text-2xl'>{data.wind.speed.toFixed(0)}MPH</p>
                    <p className='text-lg md:text-xl'>Winds</p>
                </div>
            </div>
        </div>
    </div>

  )
}

export default weather