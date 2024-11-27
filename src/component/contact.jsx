import React from 'react'

function contact() {
  return (
    <section id="contact" className="flex justify-center items-center sm:pt-96 lg:pt-10 sm:pb-10 lg:pb-40" >
      <div className="container scroll-smooth">
        <div className="w-full px-4 mb-5 flex justify-center">
          <h4 className="text-c items-center text-xl sm:text-4xl md:text-4xl font-extrabold mb-4 text-center">Contact</h4>
        </div>
        <section className='flex justify-center items-center'>
          <div className='container-form w-full max-w-md p-4 space-y-4'>
            <div>
              <h3>From</h3>
              <div className='relative w-full'>
              <input type="text" className='w-full rounded-lg '/>
              </div>
            </div>
            <div>
              <h3>Email Address</h3>
              <div className="relative w-full" ></div>
              <input type="text" className='w-full rounded-lg'/>
            </div>
            <div>
              <h3>Message</h3>
              <textarea type="text" className='px-6 py-6 w-full rounded-lg'/>
            </div>
            <div>
              <button type="button" className=' px-4 py-3 bg-c rounded-lg text-white'>Kirim</button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default contact