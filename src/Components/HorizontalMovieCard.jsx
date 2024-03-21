import React from 'react'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
function HorizontalMovieCard({movie}) {
  return (
    <section className='scrollbar-hide hover:scale-110 cursor-pointer overflow-auto transition-all duration-150 ease-in'>
    <img src={IMAGE_BASE_URL + movie.backdrop_path} alt="HrCard" className='w-[10px] overflow-auto  flex md:w-full rounded-lg hover:border-[3px] border-gray-400 hover:scale-110 cursor-pointer transition-all duration-150 ease-in-out'/>
    <h2 className='w-[10px] overflow-auto md:w-[250px] font-bold mt-5 text-center '>{movie.title}</h2>
    </section>
  )
}

export default HorizontalMovieCard
