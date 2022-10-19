import React from 'react'

function Header({ soon, colorTheme }) {
  return (
    <div className="hero">
        <nav className='bg-amber-300 dark:bg-slate-900 md:flex'>

          <div className="logo">Logo</div>

          <menu className="menu ">
            <ul className='md:flex'>
              <li className="liste">Home</li>
              <li className="liste">Pages</li>
              <li className="liste">Blog</li>
              <li className="liste">Donation</li>
              <li className="liste">Shop</li>
              <li className="liste">Contacts</li>
            </ul>
          </menu>

          <aside className="aside">
            <div className="login"> Login </div>
            <div className="register"> Register </div>
            <button onClick={()=>colorTheme()}>
                    {soon ?
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                            </svg>
                          :
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>       
                    }

                  </button>
            <button>Donation</button>
            <span className="theme"></span>
          </aside>
          
        </nav>

        <div className="banner">
          I am in the banner
        </div>
    </div>
  )
}

export default Header