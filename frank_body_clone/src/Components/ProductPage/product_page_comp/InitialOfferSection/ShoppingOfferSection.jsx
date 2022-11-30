import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTruckFast , faHeadset , faWallet} from '@fortawesome/free-solid-svg-icons';
function ShoppingOfferSection() {
    return (
        <div className='Delivery_Offer_section'>
            <div>

                <div>
                        <FontAwesomeIcon icon={faTruckFast} />
                </div>
                <div>
                    <h3>Free Delivery</h3>
                    <p>Free shipping on all order</p>
                </div>
            </div>




            <div>

                <div>
                        <FontAwesomeIcon icon={faHeadset} />
                </div>
                <div>
                    <h3>Online Support 24/7</h3>
                    <p>Support Online 24 hour a day</p>
                </div>
            </div>


            <div>

                <div>
                        <FontAwesomeIcon icon={faWallet} />
                </div>
                <div>
                    <h3>Money Return</h3>
                    <p>Back Guarantee Under 7 days</p>
                </div>
            </div>






            
        </div>
    );
}

export default ShoppingOfferSection;