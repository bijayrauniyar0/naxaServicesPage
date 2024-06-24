import React from 'react'
import './Components.css'
import Navbar from './Navbar'

const TopComponent = () => {
  return (
    <>
        <div className='services-head'>
          <Navbar />
          <div className='services-top'>
              <h2>SERVICES</h2>
              <h1>At <span className="blue-color">NAXA</span>, we work on <span className="blue-color">ideas</span>; ideas that can provide <span className="blue-color">simple solutions</span> to <span className="blue-color">complex problems</span>.</h1>
              <p>We work as a team to generate, explore, build and validate ideas. We also contextualize innovations around the world to find the best fitting solutions to local problems.</p>
          </div>
        </div>
    </>
  )
}

export default TopComponent
