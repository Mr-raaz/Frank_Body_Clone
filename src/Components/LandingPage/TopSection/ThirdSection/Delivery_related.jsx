import React from 'react';
import '../Navbar/navbar.css';
import first from '../img/first.png';
import second from '../img/second.png';
import third from '../img/third.png';
import fourth from '../img/fourth.png';
import fifth from '../img/fifth.png';
function delivery_related() {
    return (
        <>
                <div className="heading_bottom_div">
                    <div>
                        <img src={first} alt="Not found" />
                    </div>
                    <div><img src={second} alt="Not found" /></div>
                    <div><img src={third} alt="Not found" /></div>
                    <div className='mobile_res_hide'><img src={fourth} alt="Not found" /></div>
                    <div className='mobile_res_hide'><img src={fifth} alt="Not found" /></div>
                </div>
        </>
    );
}

export default delivery_related;