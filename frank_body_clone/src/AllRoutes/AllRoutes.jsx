import React from 'react';
import {Routes , Route} from 'react-router-dom';
import LandingPage from '../Components/LandingPage/LandingPage';
function AllRoutes() {
    return (
        <>


                    <Routes>
                        <Route path='/' element={<LandingPage />} />
                    </Routes>  
        </>
    );
}

export default AllRoutes;