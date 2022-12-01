import React from 'react';
import {Routes , Route} from 'react-router-dom';
import LandingPage from '../Components/LandingPage/LandingPage';
import PaymentPage from '../Components/PaymentPage/paymentPage';
function AllRoutes() {
    return (
        <>


                    <Routes>
                        <Route path='/' element={<LandingPage />} />
                        <Route path='/paymentpage' element={<PaymentPage />} />
                    </Routes>  
        </>
    );
}

export default AllRoutes;