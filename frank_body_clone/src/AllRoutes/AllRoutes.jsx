import React from 'react';
import {Routes , Route} from 'react-router-dom';
import LandingPage from '../Components/LandingPage/LandingPage';
import Login from '../Components/Login_Signup/Login';
import Register from '../Components/Login_Signup/Register';
function AllRoutes() {
    return (
        <>


                    <Routes>
                        <Route path='/' element={<LandingPage />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        
                    </Routes>  
        </>
    );
}

export default AllRoutes;