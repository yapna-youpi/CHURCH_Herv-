import React,{useEffect} from 'react'
import { Image } from 'next/image'

// import logo from '../../../public/favicon.ico'

function Header({ soon, colorTheme, }) {

    useEffect(()=>{
        let nav=document.querySelector('nav')
        window.addEventListener('scroll', ()=>{
              if(window.scrollY >= 30) {
                  document.querySelector('#nav').classList.add('bg-visible')
              } else document.querySelector('#nav').classList.remove('bg-visible')
        }, )
    }, [])

    console.log('salut les dev')
  return (
    <div className="hero">
        <nav id='nav' className='text-maron font-semibold dark:bg-slate-900  dark:text-white md:w-full md:flex md:h-20 md:items-center md:justify-around fixed'>

          <div className="logo">
            {/* <Image src={logo} alt="logo church" /> */}
            logo
          </div>

          <menu className="menu ml-0 lg:ml-44">
            <ul className='md:flex'>
              <li className="liste">Home</li>
              <li className="liste">Pages</li>
              <li className="liste">Blog</li>
              <li className="liste">Donate</li>
              <li className="liste">Shop</li>
              <li className="liste">Contacts</li>
            </ul>
          </menu>

          <aside className="aside md:w-80 md:flex md:justify-around md:items-center">
            <div className="login cursor-pointer"> Login </div>
            <div className="register cursor-pointer"> Register </div>
            <button onClick={()=>colorTheme()}>
                    {soon ?
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 dark:hover:p-1 dark:hover:rounded-xl dark:hover:bg-slate-300" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                            </svg>
                          :
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:p-1 hover:rounded-xl hover:bg-transluce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>       
                    }
                  </button>
            <button className='py-3 px-10 bg-hardOrag md:text-white md:hover:bg-orag'>Donate</button>
            <span className="bar absolute top-5 right-1 md:hidden ">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </span>
          </aside>
          
        </nav>

        <div className="banner2 md:w-12/12 md:h-screen md:dark:text-red-800">
          
        </div>
    </div>
  )
}

export default Header