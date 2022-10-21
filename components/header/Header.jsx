import React,{useEffect, useState} from 'react'
import Link from "next/link"
import { HiHome, HiShoppingCart } from 'react-icons/hi'
import { BsCalendar2DateFill } from 'react-icons/bs'
import { FaBlogger, FaDonate } from 'react-icons/fa'
import { AiFillContacts } from 'react-icons/ai'


import { Image } from 'next/image'

// import logo from '../../../public/favicon.ico'

function Header({ moon, colorTheme, }) {

    const [showIcon, setShowIcon] = useState(false)

    useEffect(()=>{
        let nav=document.querySelector('nav')
        window.addEventListener('scroll', ()=>{
              if(window.scrollY >= 30) {
                  document.querySelector('#nav').classList.add('bg-visible')
              } else document.querySelector('#nav').classList.remove('bg-visible')
        }, )
    }, [])

  return (
    <div className="hero">
        <nav id='nav' className='z-10 w-full h-screen sm:border-r border-slate-400 md:border-r-0 sm:w-5/12 bg-big dark:bg-transparent md:bg-transparent  text-maron font-semibold md:dark:bg-transparent dark:transition-all dark:duration-300 dark:ease-out dark:text-white md:w-full md:flex md:h-20 md:items-center md:justify-around fixed'>

          <div className="logo absolute top-7 left-7 z-10 md:top-0 md:relative md:left-0">
            {/* <Image src={logo} alt="logo church" /> */}
            logo
          </div>

          <menu className="menu mt-20 pt-2 ml-0 lg:ml-44 md:pt-0 md:mt-0">
            <ul className='md:flex'>
            <Link href="/"><a><li className="liste"><i><HiHome /></i> Home</li></a></Link>
            <Link href="/calendar"><a><li className="liste"><i><BsCalendar2DateFill /></i> Calendar</li></a></Link>
            <Link href="/blog"><a><li className="liste"><i><FaBlogger/></i> Blog</li></a></Link>
            <Link href="/donate"><a><li className="liste"><i><FaDonate/> </i> Donate</li></a></Link>
            <Link href="/shop"><a><li className="liste"><i>< HiShoppingCart /></i> Shop</li></a></Link>
            <Link href="/contact"><a><li className="liste"><i>< AiFillContacts/></i> Contacts</li></a></Link>
            </ul>
          </menu>

          <aside className="aside  my-10 mx-auto md:flex  md:my-0 md:mx-0 md:w-80 md:items-center ">
            <div className="login my-3 text-center cursor-pointer md:mx-2"> Login </div>
            <div className="register my-3 text-center cursor-pointer md:mx-2"> Register </div>
            <button className='absolute top-7 right-16 sm:right-7 md:relative md:top-0 md:right-0 md:mx-4' onClick={()=>colorTheme()}>
                    {moon ?
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 dark:hover:rounded-xl dark:hover:bg-transluce dark:translate-y-1 md:dark:translate-y-0" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                            </svg>
                          :
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:p-1 hover:rounded-xl hover:bg-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>       
                    }
            </button>
            <div className='w-full'>
              <button className='py-3 block mx-auto md:inline md:mx-0 my-1 px-10 bg-hardOrag md:text-white md:hover:bg-orag'>Donate</button>
            </div>
          </aside>
          

        </nav>

        { showIcon ?
            <span onClick={() => setShowIcon(!showIcon)} className="bar text-black dark:text-white z-20 absolute top-7 right-7 md:hidden ">
                    <svg  xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
            </span>
                  : 
            <span onClick={() => setShowIcon(!showIcon)} className="bar text-black dark:text-white  z-20 absolute top-7 right-7 md:hidden ">
                    <svg xmlns="http://www.w3.org/2000/svg"  className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />;nh
                    </svg>
            </span>
        }
    </div>
  )
}

export default Header