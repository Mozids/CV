import React from 'react'
import ppp from '../assets/pppppp.jpg'

function About() {
  return (
    <section id="about" className=" h-screen flex justify-center items-center" >
      <div className="container">
        <div className='w-full self-center'>
          <div className="w-full px-4 mb-5 flex justify-center">
            <h4 className="text-c items-center text-xl sm:text-4xl md:text-4xl font-extrabold mb-4 text-center" data-aos="zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine">About Me</h4>
          </div>
          <div className='flex lg:flex-row flex-col gap-5 justify-evenly items-center pt-10'>
            <div className="left">
              <img src={ppp} alt="image" className="w-72" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"/>
            </div>
              <div className="sm:w-1/2">
                <h2 className="font-medium text-white bg-c px-8 py-3 rounded-xl lg:text-lg" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
                  I am very interested in frontend development and UI/UX. 
              I enjoy creating engaging and functional web applications 
              using HTML, CSS, JavaScript, as well as frameworks like React and Tailwind CSS. 
              My main goal is to build responsive and intuitive interfaces, 
              ensuring an optimal user experience by combining aesthetic design with high performance.</h2>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}

export default About


