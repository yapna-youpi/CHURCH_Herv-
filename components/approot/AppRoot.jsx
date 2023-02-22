import React,{useState} from 'react'
import nightwind from "nightwind/helper"

import Header from '../header/Header'
import Footer from '../footer/Footer'
import Newsletter from './main/newsletter/Newsletter';
import Testimonial from './main/testimonial/Testimonial';
import Banner from './main/banner/Banner';
import Services from './main/services/Services';

function AppRoot() {

    const [moon, setMoon] = useState(false);

    const colorTheme = () =>{
        let colorT = localStorage.getItem('theme')
        nightwind.toggle();
        setMoon(!moon);
        document.getElementById('banner').classList.toggle('banner')
        document.getElementById('banner').classList.toggle('banner2')
    }
    // if( colorT === 'light') {
    // }else{
    //     theme = colorT == 'dark' ? 'light' : 'dark'
    //     localStorage.setItem('theme', `${theme}`)
    // }

    return (
        <div className='black-bg ' id='approot'>
            <Header moon={moon} colorTheme={colorTheme}  />
            <Banner />

            <Services />
            <Testimonial />
            <Newsletter />

            <Footer />
        </div>
    )
}

export default AppRoot