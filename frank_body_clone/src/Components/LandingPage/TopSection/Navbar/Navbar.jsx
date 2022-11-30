import React from 'react';
import './navbar.css'
import logo from '../img/log.png'
import { NavLink } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass , faUser , faCartShopping} from '@fortawesome/free-solid-svg-icons';
function Navbar() {
    return (
        <>
                <div className="navbar_outer">
                    <div className='logodiv'>
                        <img src={logo} alt="Not found" />
                    </div>
                    <div className='navList'>
                            <ul>
                                <li><NavLink to='/'>Home</NavLink></li>
                                <li><NavLink to='/shop'>Shop</NavLink></li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                    </div>
                    <div className='navbar_icons'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faCartShopping} />

                    </div>
                </div>
        </>
    );
}

export default Navbar;