import React from 'react';
import {Routes , Route} from 'react-router-dom';
import LandingPage from '../Components/LandingPage/LandingPage';
import ProductPage from '../Components/ProductPage/ProductPage';
import About from '../Components/About/About';
import Contact from '../Components/Contact/Contact';
function AllRoutes() {
    return (
        <>


                    <Routes>
                        <Route path='/' element={<LandingPage />} />
                        <Route path='/shop' element={<ProductPage />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/contact' element={<Contact />} />
                    </Routes>  
        </>
    );
}

export default AllRoutes;