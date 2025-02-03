import React from 'react'
import Main from './Main'

const Home = ({setIsHovered, setBg}) => {
  return (
    <div id='home' className='text-white'>
        <Main setIsHovered={setIsHovered} setBg={setBg}/>
    </div>
  )
}

export default Home