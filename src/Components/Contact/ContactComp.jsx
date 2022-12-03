import React from 'react';
import './contact.css';
import phone from './img/phone.gif';
import mail from './img/mail.gif';
import location from './img/location.gif';
function ContactComp() {

    function handleSubmit(e){
        e.preventDefault();
        e.target.reset();
    }
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
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit}>
                    <div className="contact_line_container">
                        <input type="text" placeholder='Your Name' />
                        <input type="email"  placeholder='Email'/>
                        <input type="number" placeholder='Contact' />
                    </div>

                    <textarea cols="80" rows="8"  className='textArea' placeholder='Describe Your Problem'></textarea>

                    <button class="bubbly-button">Submit </button>
                </form>
            </div>
        </>
    );
}

export default ContactComp;