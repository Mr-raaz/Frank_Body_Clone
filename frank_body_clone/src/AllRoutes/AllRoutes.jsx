import React from 'react';
import {Routes , Route , Navigate} from 'react-router-dom';
import LandingPage from '../Components/LandingPage/LandingPage';
import ProductPage from '../Components/ProductPage/ProductPage';
import About from '../Components/About/About';
import Contact from '../Components/Contact/Contact';
import ProductDescription from '../Components/ProductDescription/ProductDescription';
import Login from '../Components/Login_Signup/Login';
import Profile from '../Components/Profile/Profile';
import Register from '../Components/Login_Signup/Register';
import { useSelector } from 'react-redux';
function AllRoutes() {

    const isLogin = useSelector((store) => store.loginStatus);

    return (
        <>


                    <Routes>
                        <Route path='/' element={<LandingPage />} />
                        <Route path='/shop' element={<ProductPage />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path ='/Login' element={<Login />} />
                        <Route path='/details/:id' element={<ProductDescription />} />
                        <Route path='/profile' element={isLogin ? <Profile /> : <Navigate to='/Login' />} />
                        <Route path = '/register' element={<Register />} />
                    </Routes>  
        </>
    );
}

export default AllRoutes;