import React from 'react';
import banner from './img/banner.png';
import teddy from './img/teddy.webp';
import heart from './img/heart.webp';
import oneMore from './img/oneMore.webp';
import {motion as m} from 'framer-motion';

function Banner() {
    return (
        <>
            <div className="banner_outer">

                <m.div
                initial={{x:"-100%"}}
            animate={{x:"0%"}}
            transition={{duration:0.55 , ease: "easeOut"}}
            exit={{opacity:1}}
                >
                        <img src={banner} alt="Not found" />

                </m.div>


                <m.div className='second_div_about'
                initial={{x:"100%"}}
            animate={{x:"0%"}}
            transition={{duration:0.55 , ease: "easeOut"}}
            exit={{opacity:1}}
                >

                    <div><h2>About Us</h2></div>
                     <p><q className='testingQuote'> Frank Body is a one stop shop for all your fashion and lifestyle needs. Being India's largest e-commerce store for fashion and lifestyle products, Myntra aims at providing a hassle free and enjoyable shopping experience to shoppers across the country with the widest range of brands and products on its portal. The brand is making a conscious effort to bring the power of fashion to shoppers with an array of the latest and trendiest products available in the country </q></p>
                </m.div>


            </div>


            <div className="welcomeSection">

                <h2>Welcome to #thefrankeffect.</h2>
                <p>I don’t take myself too seriously but I’m serious about the right thing.
That's why over 6 million babes have fallen in love with me.</p>
            </div>

            <div className="aboutMesection">
                <div>
                    <img src="https://static.thcdn.com/images/medium/webp/widgets/289-eu/51/original-frank-body-about-us-slot2_749w-x-561h-104951.jpg" alt="Not found" />
                </div>
                <div>

                    <h3>My story.</h3> <br />
                        <p>Several years ago in a coffee shop, five friends had a drink and an idea: a humble coffee scrub. Their mission was to remove the hyperbole that saturates the skincare industry and make clean skincare fun. So they called me frank and I've been getting babes dirty since.
That simple, that good.</p>
                </div>
            </div>

            <div className="detail_about">

               <div>
                <img src={teddy} alt="Not found" />
                <h3>CRUELTY FREE.</h3>
                <p>My products are all naturally derived and cruelty-free, tested on babes not bunnies. Available on your demand.</p>
               </div>





               <div>
                <img src={heart} alt="Not found" />
                <h3>
                VEGAN.
                </h3>
                <p>Most of my products are vegan too. Because living a vegan, cruelty-free life is about more than what you put in your body.</p>
               </div>
               <div>
                <img src={oneMore} alt="Not Found" />
                <h3>AUSTRALIAN MADE.</h3>
                <p>It’s not my beaches that make Australia different. It’s how you feel on them: relaxed. My approach to beauty is the same.</p>
               </div>

            </div>
        </>
    );
}

export default Banner;