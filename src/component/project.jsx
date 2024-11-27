import React from 'react'
import pppp from '../assets/Eror.jpg'

function project() {
  return (
    <section id="project" className="h-screen flex justify-center items-center sm:pt-60 lg:pt-0">
    <div className="container scroll-smooth">
        <div className="w-full px-4 mb-5 flex justify-center">
          <h4 className="text-c items-center text-xl sm:text-4xl md:text-4xl font-extrabold mb-4 text-center" data-aos="zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine">Project</h4>
        </div>
        <div className='flex flex-col gap-5 justify-evenly items-center lg:flex-row'>
          <div className='flex px-5 py-5 bg-c w-2/1 rounded-lg shadow-lg' data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine">
            <div className=''>
              <img src={pppp} alt="" className='w-80'/>
              <div className='pt-3 text-white text-2xl'>
                <h3>Eror</h3>
              </div>
              <div className='pt-2'>
                <p>Description</p>
              </div>
              <div className='pt-5'>
              <button className=' py-3 px-3 rounded-lg bg-sky-600 text-white'> Lets go </button>
              </div>
            </div>
          </div>
          <div className='flex px-5 py-5 bg-c w-2/1 rounded-lg shadow-lg' data-aos="zoom-in" data-aos-offset="250" data-aos-easing="ease-in-sine">
            <div className=''>
              <img src={pppp} alt="" className='w-80'/>
              <div className='pt-3 text-white text-2xl'>
                <h3>Eror</h3>
              </div>
              <div className='pt-2'>
                <p>Description</p>
              </div>
              <div className='pt-5'>
              <button className=' py-3 px-3 rounded-lg bg-sky-600 text-white'> Lets go </button>
              </div>
            </div>
          </div>
          <div className='flex px-5 py-5 bg-c w-2/1 rounded-lg shadow-lg' data-aos="zoom-in" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <div className=''>
              <img src={pppp} alt="" className='w-80'/>
              <div className='pt- text-white text-2xl'>
                <h3>Eror</h3>
              </div>
              <div className='pt-2'>
                <p>Description</p>
              </div>
              <div className='pt-5'>
              <button className=' py-3 px-3 rounded-lg bg-sky-600 text-white'> Lets go </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>
  )
}

export default project