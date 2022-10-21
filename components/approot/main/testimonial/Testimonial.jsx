import React from 'react'

function Testimonial() {
  return (
    <div className='w-full flex  h-screen text-white  bg-[#100C0D] '>
        <div className="testimonial-img w-8/12 border ">

        </div>
        <div className="testimonial-text w-6/12 border border-red-500 z-0 bg-transparent">
            <h4 className='mt-20 mb-2 font-semibold text-lg'>TESTIMONIALS</h4>
            <h2 className='mb-10 text-5xl font-bold'>Feedback About Us</h2>

            <p className='leading-10 w-10/12'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Iste, iure rerum labore neque quas magnam aliquam vero temporibus quaerat quibusdam. 
              Laborum perferendis ipsa ea, 
              dicta omnis voluptatibus temporibus vero enim mitle.
            </p>
        </div>
    </div>
  )
}

export default Testimonial