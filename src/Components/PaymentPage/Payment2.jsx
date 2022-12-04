import React from 'react';
import './Payment.css';
import Navbar from '../LandingPage/TopSection/Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons'
import PaymentDetail from './PaymentDetail';
function Payment2() {
    return (
        <>
        <Navbar />
        <div className="payment_outer">
                    <div>
                        <div className='check'><FontAwesomeIcon className='tick' icon={faCheck}/></div>
                        <div>My Cart</div>
                    </div>
                    <div className='other_mark'>
                        <div className='check'><FontAwesomeIcon className='tick' icon={faCheck}/></div>
                        <div>Address</div>
                    </div>

                    <div className='other_mark hei curr'>
                        <div className='check'>3</div>
                        <div> &nbsp;&nbsp;&nbsp;Payment</div>
                    </div>
            </div>

            <PaymentDetail />
            
        </>
    );
}

export default Payment2;