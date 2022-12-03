import React from 'react';
import Navbar from '../LandingPage/TopSection/Navbar/Navbar';
import ContactComp from './ContactComp';
import {Footer} from '../Footer/footer';
function Contact() {
    return (
        <>
            <Navbar />

            <ContactComp /> <br /><br /> <br /> 
            <Footer />
        </>
    );
}

export default Contact;