import React from 'react'
import about from '../assets/About_logo.png'

function About() {
  return (
    // style={{fontFamily:"Arimo, sans-serif"}}
    <section className='px-4 py-16'>
      <div className='mx-auto mb-16 max-w-[32rem] flex flex-col' >
        <img src={about} alt="..." className='mx-auto mb-8 max-w-full leading-5'/>
        <h2 className='text-4xl font-semibold text-center leading-8 my-[0.83em]'>Bring the best of open source to you, your team, and your company</h2>
        <div className='text-center leading-6 text-stone-700' style={{fontFamily:"Arimo, sans-serif"}}>Relied upon by more than 17 million developers worldwide, npm is committed to making JavaScript development elegant, productive, and safe. The free npm Registry has become the center of JavaScript code sharing, and with more than two million packages, the largest software registry in the world. Our other tools and services take the Registry, and the work you do around it, to the next level.</div>
      </div>
    </section>
  )
}

export default About
