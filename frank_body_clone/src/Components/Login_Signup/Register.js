import React from 'react';
import {Link} from 'react-router-dom';
import './Register.css';
function Register() {
  return (
    <div  className='registerconatiner'>
        <form className='registerform'>
            <h2>Create an account</h2>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="First name"/>
            <input type="text" placeholder="Last name"/>
            <div>
            <input type="checkbox" /><span>Yes, I would like frank to direct all of his advice about skincare / life / love to my inbox
            </span>
            </div><div>
            <input type="checkbox"  /> <span>By ticking this box you are registering for Hotel Pink, will open a new customer account, and accept these T&Cs.
            </span></div>
            <span>You'll be sent an email with instructions to activate your account</span>
            <input type="submit" value="REGISTER"/>
        </form>
        <div className='registerlinks'>
            <Link  className='registerlinksdata' to="/password-lost">Forgot your password? </Link>
            <Link className='registerlinksdata' to="/login">Have an account? Login</Link>
        </div>
    </div>
  )
}

export default Register