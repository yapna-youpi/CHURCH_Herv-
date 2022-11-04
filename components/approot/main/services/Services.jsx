import React from 'react'
import Image from "next/image";

import cross from '../../../../public/cross.png'
import church from '../../../../public/church.png'
import prayer from '../../../../public/prayer.png'
import bible from '../../../../public/bible.png'

function Services() {
  return (
    <div className='services text-center'>
        <div className="services-title">
          OUR SERVICES
        </div>
        <h2>Loving God, helping others and serving the world</h2>
        <div className="services-all sm:flex sm:justify-center sm:items-center">
          <div className="all-first md:flex">
            <div className="all1">
              <i><Image src={cross} width="100px" height="100px" alt="cross" /> </i>
              <h3  className='font-semibold'>Worship</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </div>
            <div className="all1">
              <i><Image src={prayer} width="70px" height="100px" alt="cross" /> </i>
              <h3 className='font-semibold'>Prayer</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </div>
          </div>
          <div className="all-second md:flex">
            <div className="all1">
              <i><Image src={bible} width="95px" height="100px" alt="cross" /> </i>
              <h3 className='font-semibold'>knowledge</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </div>
            <div className="all1">
              <i><Image src={church} width="70px" height="100px" alt="cross" /> </i>
              <h3 className='font-semibold'>Fundraising</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default Services