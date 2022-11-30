import React from 'react';
import {Routes , Route} from 'react-router-dom';
import LandingPage from '../Components/LandingPage/LandingPage';
import ProductPage from '../Components/ProductPage/ProductPage';
function AllRoutes() {
    return (
        <>


                    <Routes>
                        <Route path='/' element={<LandingPage />} />
                        <Route path='/shop' element={<ProductPage />} />
                    </Routes>  
        </>
    );
}

export default AllRoutes;