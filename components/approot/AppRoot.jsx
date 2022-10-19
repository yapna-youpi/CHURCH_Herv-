import React,{useState} from 'react'
import nightwind from "nightwind/helper"

import Header from '../../pages/home/header/Header'
import Footer from '../../pages/home/footer/Footer'

function AppRoot({ children }) {

    const [soon, setSoon] = useState(false);

    const colorTheme = () =>{
        let colorT = localStorage.getItem('theme')
        nightwind.toggle();
        setSoon(!soon);
        // if( colorT === 'light') {
        // }else{
        //     theme = colorT == 'dark' ? 'light' : 'dark'
        //     localStorage.setItem('theme', `${theme}`)
        // }
    }

    return (
        <div className='black-bg '>
            <Header soon={soon} colorTheme={colorTheme}  />
            {children}
            <Footer />
        </div>
    )
}

export default AppRoot