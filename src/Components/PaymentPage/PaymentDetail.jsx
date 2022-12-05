import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function PaymentDetail() {

    const [curr, setcurr] = useState('3');
    const lcoalprice = localStorage.getItem("total_Price");
    const [payment , setpayment] = useState(false);
    const [loading , setLoading] = useState(false);

    const navigate = useNavigate();

    function handleRedirect(){
        navigate('/')
    }

    function handleOrder(){
        setLoading(true);

        setTimeout(()=>{
            setLoading(false);
            setpayment(true);
        },1000)
    }
    return (
        <>
            <div className="outsdaferDiv">

                    <div className='detailsDiv'>

                            <div>
                                <button className={curr == '1' ? "btnActive" : null}   onClick={()=>setcurr('1')}>Wallets</button>
                                <button  className={curr == '2' ? "btnActive" : null}  onClick={()=>setcurr('2')}>Upi</button>
                                <button className={curr == '3' ? "btnActive" : null}  onClick={()=>setcurr('3')}>Cards</button>
                                <button className={curr == '4' ? "btnActive" : null}  onClick={()=>setcurr('4')}>Net Banking</button>
                                <button className={curr == '5' ? "btnActive" : null}  onClick={()=>setcurr('5')}>Pay Later</button>
                                <button className={curr == '6' ? "btnActive" : null}  onClick={()=>setcurr('6')}>Pay On Delivery</button>
                            </div>




                            <div className='btn_details'>
                                    {
                                        curr == '1' ? <div className="walletPaymet">
                                    <div><img src="https://www.logo.wine/a/logo/Paytm/Paytm-Logo.wine.svg" alt="Not found" />
                                            <h3 className='linkwallet'>Link Wallet</h3>
                                    </div>

                                    <div><img src="https://download.logo.wine/logo/PhonePe/PhonePe-Logo.wine.png" alt="Not found" />
                                            <h3 className='linkwallet'>Link Wallet</h3>
                                    </div>

                                    <div><img src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/GooglePay_Lockup.max-1200x1200.png" alt="Not found" />
                                            <h3 className='linkwallet'>Link Wallet</h3>
                                    </div>

                                    <div><img src="data:image/jpeg;base64,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6S9CKjFRXQe1G/LKx3M4H5qwaVM9hjuZxHiP0VZur4I2vY3O0O3O27bG29alhDlqNSl14M+8lydWFTf78yI0YpHNDnuFs1g0c451YV1C7LboUVRpqC6DKq1HUm5vpCIimIwiIgCi8YwOlq2ZKqFkw5Mw9pvW129p7FKIgNTYzqXp3kupKh8HMx44Rg7Dsd9VU6rVBisbv3Rhm5i2QsPg4C3ivoVcID5zOr/SAbBG+3VO23417x6qsZlI4Tg29ckpdbuaCV9DIgNN4VqTGw1dWTztibbuzv8ARbDwDQ7D6Kxp4Gtf/wAR3tyf97to7rKwogI7GcMjqYHQS5sj8ucNOUvAcHZSfhNrHqJWXBE1jQ1gDWtAa1oFg0DYAByBeyIAiIgCIiAIiIAoXH8PdI0OZtcy+z4hy96mlwVFWpRqwcJamd06jpyUo60a7cwjYQR2rqth5BzBOCbzDwCyHwN3/L1NLnPuefoa8XN1sHg2/CPALngm/CPALzmd/wA/L1HOfc8/Q17dFsHgm8w8AnBN+EeATmd/z8vUc59zz9DXqLYXBN+EeATgm/CPAJzM/wCfl6jnPu+foa9XK2FwbeYeATg28w8AnM/f8vUc59zz9ClYdhz5XCwIb/U7kt1c5V1jbYADcNgXay5AWjaWkbeLSeW9bKVxcSrvL1I5REVwrhERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQH/9k=" alt="Not found" />
                                            <h3 className='linkwallet'>Link Wallet</h3>
                                    </div>
                                    
                                </div> : null
                                    }

                           { curr == '3' ?      <div className="cardpayment">
                                    {/* Woking from here,,,, */}

                                    <div className="cardsSection">

<h5>Credit & Debit Cards</h5>
<p>Add New Card For Payment</p>

<p className="number-detail">Card Number</p>
<input id="Card_number"  type="number" placeholder="XXXX XXXX XXXX XXXX" />


<div className="expiry">

<div>
    <p className="number-detail">Expiry Date (MM/YY)</p>
<input id="Card_number"  type="number" placeholder="MM / YY" />
</div>

<div>
    <p className="number-detail">Security code</p>
<input id="Card_number" className="cvv" type="number" placeholder="CVV" />
</div>

</div>
<p className="number-detail">Name</p>
<input id="Card_number" className="card_name" type="text" placeholder="Name On Card" />


                                    {/* Working till here.... */}
                                </div>
                            </div> : null }

                    </div>
                    </div>











                    <div className='otherDiv'>

                        <div className="topSection">
                            <img src="https://res.cloudinary.com/du8msdgbj/image/upload/v1609235175/rwfhtgwtk8zmnbwdvfme.png" alt="Not found" />
                            <div>
                            <p>Get 20% instant discount (up to ₹400) on
Beauty and Makeup products on........</p>
                            </div>

                        </div>


                        <div className="paymentSection_two">
                            <div>
                                <p><span>Item Total(MRP)</span> <span>&#x20B9; {lcoalprice}</span></p>
                                <p><span>Price Discount</span> <span> - &#x20B9; 99</span></p>

                                <p><span>Care Plan</span> <span>&#x20B9; 165</span></p>

                                
                            </div>

                            <p><span>   Shipping Free</span> <span>&#x20B9; 49</span></p>

                            <div className='line'></div>

                            <p><span className='paid_p'>To be Paid</span> <span className='paid_p'>&#x20B9; {Number(lcoalprice) + 115}</span></p>



                            <div className='saved'>
                            <p><span>Total Saving</span> <span className='sav'>&#x20B9; 99</span></p>
                            </div>


                        </div>

                        <div>
                            <button className='placeOrderBtn' onClick={handleOrder}>Place Order</button>
                        </div>
                    </div>
            </div>


            {
                payment ?<> 
                
                <div className="outerSlipContainer">
                <div class="container">
  <div class="printer-top"></div>
    
  <div class="paper-container">
    <div class="printer-bottom"></div>

    <div class="paper">
      <div class="main-contents">
        <div class="success-icon">&#10004;</div>
        <div class="success-title">
          Payment Complete
        </div>
        <div class="success-description">
          Thank You so Much For Being Our Valued Customer ! Hope You Enjoy Your New Purchase. You can Track Your Order Status in Profile Section.
        </div>
        <div class="order-details">
          <div class="order-number-label">Order Number</div>
          <div class="order-number">#34365</div>
        </div>
        <div class="order-footer">Thank you!</div>
        <div className='gth'><button onClick={handleRedirect}>Go To Home </button></div>
      </div>
      <div class="jagged-edge"></div>
    </div>
  </div>
</div>
                </div>
                
                
                
                </> : null
            }


            {
                loading ?   <div className="loading_container">
                        <p>Loading....</p>
                </div> : null
            }
        </>
    );
}

export default PaymentDetail;