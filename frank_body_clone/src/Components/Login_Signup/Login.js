import React from 'react';
import {Link} from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <div className='loginconatiner'>
        <div>
            <img src="https://www.frankbody.com/wp-content/themes/frank/resources/images/hotel-pink-logo.png" alt="This" />
        </div>
        <div >
            <h2>Sign in to your account</h2>
        </div>
        <form className='loginform'>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="submit" value="SIGN IN"/>
        </form>
        <div className='loginlinks'>
            <Link  className='loginlinksdata' to="/password-lost">Forgot your password? </Link>
            <Link className='loginlinksdata' to="/register">Register an account</Link>
        </div>

    </div>
  )
}

export default Login