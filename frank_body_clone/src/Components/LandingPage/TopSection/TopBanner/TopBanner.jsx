import React from 'react';
import rightlogo from '../img/rightlogo.png';
import {motion as m } from 'framer-motion';








function TopBanner() {

       function handleClick(){
        alert("working fine.....")
       }

    return (

            <div className='top_banner'>
            <m.div className='topbanner_heading' 
            initial={{x:"-100%"}}
            animate={{x:"0%"}}
            transition={{duration:0.55 , ease: "easeOut"}}
            exit={{opacity:1}}
            
            
            >
            
                    <h1 >More Than Makeups,</h1>
                    <h1>We Create Beauty in Joy</h1>
                    <h1>& Give The Best Magic Beauty</h1>
                    <p>Everything is There For Your Beauty Needs</p>

                    <button className='ShowNow_btn' onClick={handleClick}>Shop Now</button>




            </m.div>
            <m.div initial={{x:"100%"}}
            animate={{x:"0%"}}
            transition={{duration:0.55 , ease: "easeOut"}}
            exit={{opacity:1}}>
                    <img src={rightlogo} alt="Not Found" />
            </m.div>

            <div className='checking'></div>
        </div>
    );
}

export default TopBanner;