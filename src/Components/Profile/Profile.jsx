import React from 'react';
import Navbar from '../LandingPage/TopSection/Navbar/Navbar';
import './Profile.css'
import avtar from './img/avtar.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTruck , faAngleRight} from '@fortawesome/free-solid-svg-icons';
import edit from './img/edit.png';
import { useState } from 'react';
function Profile() {

    // const data = ;

    const [data , setData] = useState(JSON.parse(localStorage.getItem("orderHistory")));

    function handleClickCancel(idx){
        // data.splice(idx , 1)

        let temp = data.filter((elem , id)=>{
            return id != idx;
        })

        localStorage.setItem("orderHistory" , JSON.stringify(temp));
        setData(temp);
    }


    return (
        <>
            <Navbar />

            <div className="headingHere">
                <h3>My Account</h3>
            </div>
            <div className="profile_outer">


                <div className="profile_left">
                    <div className='userDetails'>
                            <div>
                                <img src={avtar} alt="Not found" />
                            </div>


                            <div>
                                <h3>Anshu Raj</h3>
                                <p>fakereal477@gmail.com</p>
                                <p>+91 - 800******7</p>
                            </div>


                    </div>
                </div>





                <div className="profile_right">

                        <div>
                            <img src={edit} alt="Not found" />
                            <h6>Edit Profile</h6>
                        </div>


                        <div>
                            <img src="https://www.netmeds.com/msassets/images/icons/medicine_orders.svg" alt="Not found" />
                            <h6>Orders</h6>
                        </div>
                        <div>
                            <img src="https://www.netmeds.com/msassets/images/icons/rewards.svg" alt="Not found" />
                            <h6>Rewards</h6>
                        </div>
                </div>



            </div>
            <div className="orderHistory">

                <h3>Previous Orders</h3>

                <div className="prev_order_container">
                    {
                        data.map((elem , idx)=>{
                            return <>
                            <br />
                            <div className="orderItem">
                        <div><img src={elem.url_1} alt="Not found" /></div>

                        <div>
                            <h3>{elem.prod_name}</h3>
                            <p>OrderId : #34356</p>
                            <p><b>Price:</b> &#x20B9; {elem.best_price  * elem.quantity}</p>
                        </div>

                        <div className='btn_gourp'>
                            <button>Track Order</button>
                            <button onClick={()=>handleClickCancel(idx)}>Cancel Order</button>
                        </div>
                    </div>
                            </>
                        })
                    }
                </div>
                    </div>
        </>
    );
}

export default Profile;