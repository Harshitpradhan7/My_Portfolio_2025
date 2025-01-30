import React from 'react'

const Cards = ({title, description, tech, github, demo}) => {
  return (
    <div className='bg-gray-800 m-4 p-4 min-h-62 w-90 rounded-xl'>
      <div>
        <h1 className='text-2xl text-gray-300 font-semibold mb-2'>{title}p</h1>
        <p className='text-sm'>{description}</p>
      </div>
      <div className='flex flex-wrap justify-start mt-4 '>
        {tech.map((item, index)=> (
            <button key={index} className='bg-blue-600 px-3 py-1 mr-2 mb-2 rounded-2xl'>{item}</button>
        ))}
        
      </div>
      <div className='flex justify-between mt-4'>
        <a href={github} className='text-blue-400 hover:bg-blue-600 hover:text-white p-2 rounded'>Github</a>
        <a href={demo} className='text-green-400 hover:bg-emerald-600 hover:text-white p-2 rounded'>Live link</a>
      </div>
    </div>
  )
}

export default Cards
