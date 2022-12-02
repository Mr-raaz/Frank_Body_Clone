import React from 'react';
import banner from './img/banner.png';
function Banner() {
    return (
        <>
            <div className="banner_outer">

                <div>
                        <img src={banner} alt="Not found" />
                </div>


                <div className='second_div_about'>

                    <div><h2>About Us</h2></div>
                     <p><q className='testingQuote'> Frank Body is a one stop shop for all your fashion and lifestyle needs. Being India's largest e-commerce store for fashion and lifestyle products, Myntra aims at providing a hassle free and enjoyable shopping experience to shoppers across the country with the widest range of brands and products on its portal. The brand is making a conscious effort to bring the power of fashion to shoppers with an array of the latest and trendiest products available in the country </q></p>
                </div>


            </div>


            <div className="welcomeSection">

                <h2>Welcome to #thefrankeffect.</h2>
                <p>I don’t take myself too seriously but I’m serious about the right thing.
That's why over 6 million babes have fallen in love with me.</p>
            </div>

            
        </>
    );
}

export default Banner;