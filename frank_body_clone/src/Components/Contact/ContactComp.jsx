import React from 'react';
import './contact.css';
import phone from './img/phone.gif';
import mail from './img/mail.gif';
import location from './img/location.gif';
function ContactComp() {
    return (
        <>
            <div className="contact_outer">
                <p>You've got some Q's and w've got tons and tons of A's. Ask us about an order, a product, what you should name your puppy... anything we can help with! Don't be shy -we promise we're really nice.</p>
            </div>

            <div className="contactDetails">

                <div className="specific">
                    <div><img src={phone} alt="" /></div>
                    <div>
                        <h4>Contact</h4>
                        <p>+91 1800 1823 5555</p>
                    </div>
                </div>

                <div className="specific">
                    <div><img src={mail} alt="" /></div>
                    <div>
                        <h4>Write us</h4>
                        <p>help@frankbody.com</p>
                    </div>
                </div>

                <div className="specific">
                    <div><img src={location} alt="" /></div>
                    <div>
                        <h4>We are at</h4>
                        <p>Sidney , Austrailia</p>
                    </div>
                </div>

                
            </div>



            <div className="contact_form_container">
                <form>
                    
                </form>
            </div>
        </>
    );
}

export default ContactComp;