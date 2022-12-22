import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

function index() {
  return (
    <div>
      <Header/>
        <div className="logine d-flex justify-center items-center">
            <div className='bubble '>
                <div className='form-container'>
                    <form class="login-form">
                        <div class="icon">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" color="#c31432" height="50" width="50" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 8V7c0-2.757-2.243-5-5-5S7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2H9V7c0-1.654 1.346-3 3-3s3 1.346 3 3v1h2zm1 4 .002 8H6v-8h12z"></path>
                            </svg>
                        </div>
                        <h1>Login</h1>
                        <input type="email" required="" placeholder="Email" />
                        <input type="password" required="" placeholder="Password" />
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
      <Footer />
    </div>
  )
}

export default index