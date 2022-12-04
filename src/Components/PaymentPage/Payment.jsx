import React from 'react';
import './Payment.css';
import Navbar from '../LandingPage/TopSection/Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons'
import {TextField} from '@mui/material'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
function Payment() {

    const navigate = useNavigate();
    return (
        <>
        <Navbar />
            <div className="payment_outer">
                    <div>
                        <div className='check'><FontAwesomeIcon className='tick' icon={faCheck}/></div>
                        <div>My Cart</div>
                    </div>
                    <div className='other_mark curr'>
                        <div className='check'>2</div>
                        <div>Address</div>
                    </div>

                    <div className='other_mark hei'>
                        <div className='check'>3</div>
                        <div> &nbsp;&nbsp;&nbsp;Payment</div>
                    </div>
            </div>

            <div className="address_form">

                    <h4>Add a new Address</h4>
                <form className='addressForm' onSubmit={(e)=> e.preventDefault()}>

                    
                    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch'},
      }}
      Validate
      autoComplete="off"
    >
      <div>
        <TextField
          label="First Name"
          id="outlined-size-small"
          defaultValue=""
          size="small"
          
        />
        <TextField
          label="Last Name"
          id="outlined-size-small"
          defaultValue=""
          size="small"
        />
      </div>
      <div className='divTest'>
      <TextField
          label="Email"
          id="outlined-size-small"
          defaultValue=""
          size="small"
          sx={{
        width: 300
    }}
    InputProps={{ sx: { height: 40 , width: 500 } }}
    placeholder=""
        /></div>
        <div className='divTest'>
      <TextField
          label="Contact Number"
          id="outlined-size-small"
          defaultValue=""
          size="small"
          sx={{
        width: 300
    }}
    InputProps={{ sx: { height: 40 , width: 500 } }}
    placeholder=""
        /></div><div className='divTest'>
      <TextField
          label="Pin Code"
          id="outlined-size-small"
          defaultValue=""
          size="small"
          sx={{
        width: 300
    }}
    InputProps={{ sx: { height: 40 , width: 500 } }}
    placeholder=""
        /></div><div className='divTest'>
      <TextField
          label="Landmark"
          id="outlined-size-small"
          defaultValue=""
          size="small"
          sx={{
        width: 300
    }}
    InputProps={{ sx: { height: 40 , width: 500 } }}
    placeholder=""
        /></div>
        
        <input type="text" placeholder='Flat Number , Building Name , Street Locality' className='addressinput'/>

        
      
      
    </Box>
                <div className="payment_btn_div">
                <button onClick={()=>navigate('/payment')}>Continue</button>
                </div>
                </form>
            </div>
        </>
    );
}

export default Payment;