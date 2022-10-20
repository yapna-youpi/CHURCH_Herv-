import React,{useState} from 'react'
import nightwind from "nightwind/helper"

import Header from '../../pages/home/header/Header'
import Footer from '../../pages/home/footer/Footer'

function AppRoot({ children }) {

    const [moon, setMoon] = useState(false);

    const colorTheme = () =>{
        let colorT = localStorage.getItem('theme')
        nightwind.toggle();
        setMoon(!moon);
        document.getElementById('banner').classList.toggle('banner')
        document.getElementById('banner').classList.toggle('banner2')
        // if( colorT === 'light') {
        // }else{
        //     theme = colorT == 'dark' ? 'light' : 'dark'
        //     localStorage.setItem('theme', `${theme}`)
        // }
    }

    return (
        <div className='black-bg' id='approot'>
            <Header moon={moon} colorTheme={colorTheme}  />
            {children}
            <Footer />
        </div>
    )
}

export default AppRoot