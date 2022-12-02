import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Register.css';
const intialregisterdata = {
  email:"",
  password:"",
  fname:"",
  lname:"",
}
const arr = JSON.parse(localStorage.getItem("RegisterItems")) || [];
function Register() {
  const navigate = useNavigate();
  

  const [registationdata,setregistationdata] = useState(intialregisterdata);

  
 const {email, password, fname, lname} = registationdata;

const Handlechange = (e) => {
  const{name,value} = e.target;
  setregistationdata({...registationdata,[name]:value})
}

const Registerationhandler = (e) => {
  var count=0;
  e.preventDefault();
  if(arr.length>0)
  {
    arr.map((elem)=>{
      if(elem.email === registationdata.email)
      {
        alert("User already Exists");
        setregistationdata(intialregisterdata);
        count++;
      }
     return 1;
    })
  }
  if(count===0){
 arr.push(registationdata);
  localStorage.setItem("RegisterItems",JSON.stringify(arr));
  setregistationdata(intialregisterdata);
  alert('Registration SuccessFull')
    navigate('/login');
  }
  count=0;
 
}





  return (
    <div  className='registerconatiner'>
        <form onSubmit={Registerationhandler} className='registerform'>
            <h2>Create an account</h2>
            <input name="email" type="email" placeholder="Email" value={email} onChange={Handlechange} required/>
            <input name="password" type="password" placeholder="Password" value={password} onChange={Handlechange} required/>
            <input name="fname" type="text" placeholder="First name" value={fname} onChange={Handlechange} required/>
            <input name="lname" type="text" placeholder="Last name" value={lname} onChange={Handlechange} required/>
            <div>
            <input name="" type="checkbox" checked/><span>Yes, I would like frank to direct all of his advice about skincare / life / love to my inbox
            </span>
            </div><div>
            <input name="" type="checkbox"  checked/> <span>By ticking this box you are registering for Hotel Pink, will open a new customer account, and accept these T&Cs.
            </span></div>
            <span>You'll be sent an email with instructions to activate your account</span>
            <input  type="submit" value="REGISTER"/>
        </form>
        <div className='registerlinks'>
            <Link  className='registerlinksdata' to="/password-lost">Forgot your password? </Link>
            <Link className='registerlinksdata' to="/login">Have an account? Login</Link>
        </div>
    </div>
  )
}

export default Register