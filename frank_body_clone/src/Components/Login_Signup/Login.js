import React,{useState} from 'react';
import {Link,Navigate} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Login.css';
const logindatainital  = {
    email:"",
    password:"",
}
let localStoragearr = JSON.parse(localStorage.getItem('RegisterItems')) || [];


function Login() {

    const navigate = useNavigate();
  
    const [logindata,setlogindata] = useState(logindatainital);
    const [loginstatus,setloginstatus] = useState(false);
    localStorage.setItem("Login_Status",loginstatus);
    
    const logindataHandler = (e) => {
      const {name,value} = e.target;
      setlogindata({...logindata,[name]:value});
    }

    const {email,password} = logindata;

    // function handleLogin(){
        

        const loginsubmitter = (e) => {

            let localStoragearr2 = JSON.parse(localStorage.getItem('RegisterItems')) || [];


            e.preventDefault();
            if(localStoragearr2.length>0)
            {
                localStoragearr2.map((elem)=>{
                    if(elem.email === logindata.email && elem.password === logindata.password)
                    {
                        setloginstatus(true);
                        // console.log(loginstatus);
                        
                        alert('login Success');
                        navigate('/')
                        localStorage.setItem("Login_Status",loginstatus);
                        // return <Navigate to="/register" />
                    }
                return 1;
                })
            }
            else{
                alert("Register to login");
              
            }
        }

    // }
    

  return (
    <div className='loginconatiner'>
        <div>
            <img src="https://www.frankbody.com/wp-content/themes/frank/resources/images/hotel-pink-logo.png" alt="This" />
        </div>
        <div >
            <h2>Sign in to your account</h2>
        </div>
        <form onSubmit={loginsubmitter} className='loginform'>
            <input type="email" name="email" value={email} placeholder="Email"  onChange={logindataHandler} required/>
            <input type="password" name="password" value={password} placeholder="Password" onChange={logindataHandler} required/>
            <input type="submit" value="SIGN IN" />
        </form>
        <div className='loginlinks'>
            <Link  className='loginlinksdata' to="/password-lost">Forgot your password? </Link>
            <Link className='loginlinksdata' to="/register">Register an account</Link>
        </div>

    </div>
  )
}

export default Login