import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Image from 'next/image'
import imag from '../../public/decor1.png'
import imag2 from '../../public/decor2.png'
import imag3 from '../../public/decor3.png'

function index() {
  return (
    <div>
      <Header/>
        <p className='py-8 font-bold text-maron text-xl md:text-4xl text-center mt-28 bg-white'>Contacts</p>
        <div className="decor flex flex-col sm:flex-row justify-center sm:py-16 sm:justify-around items-center">
          <div className="colap">
            <i className=''>
            <Image src={imag} placeholder='blur'  width="200px" height="150px"  />
            </i>
            <p>St. Leroy Church</p>
            <span>30 Coleman Street, 350 <br/>London, UK EC2R 5AL</span>
          </div>
          <div className="colap">
            <i className=''>
            <Image src={imag2} placeholder='blur'  width="200px" height="150px"  />
            </i>
            <p>St. Leroy Church</p>
            <span>30 Coleman Street, 350 <br/>London, UK EC2R 5AL</span>
          </div>
          <div className="colap">
            <i className=''>
            <Image src={imag3} placeholder='blur'  width="200px" height="150px"  />
            </i>
            <p>St. Leroy Church</p>
            <span>30 Coleman Street, 350 <br/>London, UK EC2R 5AL</span>
          </div>
        </div>
      <Footer />
    </div>
  )
}

export default index