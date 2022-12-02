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

            
        </>
    );
}

export default Banner;