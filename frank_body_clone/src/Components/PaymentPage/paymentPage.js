import React from "react";
import "./paymentPage.css";
import logo from "./images/log.png"

function PaymentPage(){
    let phonepe=()=>{
        document.getElementById("paymentdetailsdiv").innerHTML = `<div><h5>You have selected Phonepe as Your Payment Method</h5>
        <input type="text" placholder="Enter Your Upi" id="upiinputbox"/>
        <button id="upiverifybtn">Verify UPI & PAY </button>
        </div>`;
    }
    let gpay=()=>{
        document.getElementById("paymentdetailsdiv").innerHTML = `<div><h5>You have selected GPay as Your Payment Method</h5>
        <input type="text" placholder="Enter Your Upi" id="upiinputbox"/>
        <button id="upiverifybtn">Verify UPI & PAY </button>
        </div>`;
    }
    let amazonpay=()=>{
        document.getElementById("paymentdetailsdiv").innerHTML = `<div><h5>You have selected AmazonPay as Your Payment Method</h5>
        <input type="text" placholder="Enter Your Upi" id="upiinputbox"/>
        <button id="upiverifybtn">Verify UPI & PAY </button>
        </div>`;
    }
    let creditcard=()=>{
        document.getElementById("paymentdetailsdiv").innerHTML = `<div><h5>You have selected Credit Card as Your Payment Method</h5>
        <div id="carddetailsSection">
        <h2>Card Details</h2>
        <label for="cdetails">Card Number</label>
        <input type="text" placeholder="Enter Card Number" name="cdetails" maxlength="16" minlength="16"/>
        <label for="cname">Name on Card</label>
        <input type="text" placeholder="Enter Card Holder Name" name="cdetails"/>
        <span id="ccvnexpblock"><div><label for="cexpiry">Card Expiry</label>
        <input type="text" placeholder="Expiry" name="cexpiry"/></div>
        <div><label for="cvv">Card CVV</label>
        <input type="text" placeholder="Enter CVV" name="cvv" maxlength="3" minlength="3"/></div></span>
        </div>
        <button id="cardpaybtn">Pay Securely</button>
        </div>`;
    }
    let debitcard=()=>{
        document.getElementById("paymentdetailsdiv").innerHTML = `<div><h5>You have selected Debit Card as Your Payment Method</h5>
        <div id="carddetailsSection">
        <h2>Card Details</h2>
        <label for="cdetails">Card Number</label>
        <input type="text" placeholder="Enter Card Number" name="cdetails" maxlength="16" minlength="16"/>
        <label for="cname">Name on Card</label>
        <input type="text" placeholder="Enter Card Holder Name" name="cdetails"/>
        <span id="ccvnexpblock"><div><label for="cexpiry">Card Expiry</label>
        <input type="text" placeholder="Expiry" name="cexpiry"/></div>
        <div><label for="cvv">Card CVV</label>
        <input type="text" placeholder="Enter CVV" name="cvv" maxlength="3" minlength="3"/></div></span>
        </div>
        <button id="cardpaybtn">Pay Securely</button>
        </div>`;
    }
    let orderConfirmation =()=>{
        document.getElementById("ppInnerContainer").innerHTML=``;
        document.getElementById("confirmationbox").innerHTML=`<div>
        <h1>ThankYou for Your Order</h1></div>`;

    }


    return (<div id="pppage">
        {/* <div id="pptop-1">
            <h2>Just one more step to complete your order....</h2>
        </div> */}
        <div id="main payment page">
                <div className="paymentpageContainer">
                <img src={logo} className="pppagelogo"></img>
                <h2>Checkout</h2>
                    <div id="confirmationbox"></div>
                    <div className="ppInnerContainer">
                    
                        <div className="ppinnerContainer-left">
                            <h3>Delivery Details</h3>
                            <hr className="seprator_line"></hr>
                            <div>
                                <div className="inputContainer">
                                <span>
                                <label for="fname">First name:</label><br></br>
                                <input type="text" placeholder="Enter your first name" name="fname"/>
                                </span>
                                <span>
                                <label for="lname">Last name:</label><br></br>
                                <input type="text" placeholder="Enter your last name" name="lname"/>
                                </span>
                                </div>
                                <div className="inputContainer">
                                <span>
                                <label for="fname">Email Address:</label><br></br>
                                <input type="text" placeholder="Enter your first name" name="fname"/>
                                </span>
                                <span>
                                <label for="lname">Mobile no:</label><br></br>
                                <input type="text" placeholder="Enter your last name" name="lname"/>
                                </span>
                                </div>
                                <label for="add">Address:</label><br></br>
                                <input type="text" placeholder="Enter your address" name="add"/>
                            </div>
                            <h3>Payment Method</h3>
                            <hr className="seprator_line"></hr>
                            <div id="walletPay">
                            <h5>Wallet Payment</h5>
                            <div id="wallpaymentsblock">
                                <button className="paymentmodebtn" onClick={phonepe}>PhonePe</button>
                                <button className="paymentmodebtn" onClick={gpay}>G-Pay</button>
                                <button className="paymentmodebtn" onClick={amazonpay}>Amazon Pay</button>
                            </div>
                            </div>
                            <div id="cardPay">
                            <h5>Card Payment</h5>
                            <div id="cardpaymentsblock">
                                <button className="paymentmodebtn" onClick={debitcard}>Debit Card</button>
                                <button className="paymentmodebtn" onClick={creditcard}>Credit Card</button>
                            </div>
                            </div>
                        </div>
                        <div className="ppinnerContainer-right">
                        <h3>Payment Details</h3>
                            <hr className="seprator_line"></hr>
                            <h3>Amount to be paid <span id="amounttopay">₹500</span></h3>
                            <div id="paymentdetailsdiv"></div>
                        </div>
                    </div>
                </div>
            </div>
    </div>);
}

export default PaymentPage;