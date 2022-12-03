import React  , {useState}from 'react';
import Navbar from '../LandingPage/TopSection/Navbar/Navbar';
import { Link  , Navigate} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Login.css'
import {faGoogle , faFacebook} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToastContainer, toast } from 'react-toastify';
import {toast as tt} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
          toast.warn('User Already Exists', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
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
    
    // alert('Register Success');
    tt.success('Successfully Registered', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      });

      setTimeout(()=>{
        navigate('/login');
      },1000)
    }
    count=0;
   
  }







    return (
        <>
            <Navbar />

            <div className="login_div">
                <div className="inner_login_div">
                    <div>
                        <img src="https://colorlib.com/etc/regform/colorlib-regform-20/images/registration-form-4.jpg" alt="Not Found" />
                    </div>


                    <div className='formSide'>

                    <div  className='registerconatiner'>

        <form onSubmit={Registerationhandler} className='registerform'>
            <h2 className='cana'>Create an account</h2>
            <input name="email" type="email" placeholder="Email" value={email} onChange={Handlechange} required/>
            <input name="password" type="password" placeholder="Password" value={password} onChange={Handlechange} required/>
            <input name="fname" type="text" placeholder="First name" value={fname} onChange={Handlechange} required/>
            <input name="lname" type="text" placeholder="Last name" value={lname} onChange={Handlechange} required/>

            <ToastContainer  style={{zIndex:100000}}/>
            <span className='maysend'>You'll be sent an email with instructions to activate your account</span>
            <input  type="submit" value="REGISTER"/>
        </form>
        <div className='registerlinks'>
            {/* <Link  className='registerlinksdata firstlink'>Forgot your password? </Link> */}
            <Link className='registerlinksdata firstlink' to="/login">Have an account? Login</Link>
        </div>
    </div>
                    
    <ToastContainer  style={{zIndex:100000000}}/>
    

    
                    </div>


                </div>
            </div>
        </>
    );
}

export default Register;