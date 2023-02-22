import React from 'react'
import { FaTelegramPlane } from 'react-icons/fa'

function Newsletter() {
  return (
    <div className='newsletter sm:h-20 md:h-96 flex justify-center items-center'>
        <div className="newsletter-content text-maron ">
            <div className="newsletter-ico text-white my-5">
                <i className='testicon mx-auto h-9 w-9 rounded-full bg-hardOrag flex justify-center items-center pr-1 text-2xl '><FaTelegramPlane/></i>
            </div>
            <div className="newsletter-text">
                <h2 className='text-3xl font-bold my-5 py-3 text-center'>
                    God is with us, God loves us. <br/>
                    We're sharing His Power.
                </h2>
            </div>
            <div className="form ">
                <form action="post">
                    <div className="form-group bg-white flex items-center py-3 pl-4   shadow-dark-400/40">
                        <input className='border-r w-8/12 outline-0' type="text" placeholder='Enter Your Email Address' />
                        <button type='submit' className='w-4/12 ml-3 flex items-center font-semibold hover:text-hardOrag hover:duration-500'><i className='mx-2'><FaTelegramPlane/> </i> SUBSCRIBE</button>
                    </div>
                </form>
                <div className="newsletter-policy">
                    <input type="checkbox"  />
                    <label className='font-sans text-sm  '> I agree the <span className='underline cursor-pointer'>privacy policy</span></label>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter