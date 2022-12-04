import React from 'react';
import Navbar from '../LandingPage/TopSection/Navbar/Navbar';
import InitialOfferSection from './product_page_comp/InitialOfferSection/InitialOfferSection';
import Product_List from './product_page_comp/InitialOfferSection/Product_List';
import {motion as m } from 'framer-motion';
import ShoppingOfferSection  from './product_page_comp/InitialOfferSection/ShoppingOfferSection';
import {Footer} from '../Footer/footer';
import Maximise from '../LandingPage/MiddleSection/Maximise';
import OfferBanner from './product_page_comp/OfferBanner';
import PopularCategorySection from './product_page_comp/PopularCategorySection';
function ProductPage() {
    return (
        <>

    

    <m.div initial={{opacity:0}}
            animate={{opacity:1}}
            // transition={{duration:0.35 , ease: "easeOut"}}
            exit={{opacity:1}}
            
            >
            <Navbar />

            <InitialOfferSection />

            <Product_List />

            <OfferBanner />


<PopularCategorySection />
                <ShoppingOfferSection />


                <Footer />
            
    </m.div>
                        

            </>
    );
}

export default ProductPage;