import React from 'react';
import Navbar from '../LandingPage/TopSection/Navbar/Navbar';
import './productCategory.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { margin } from '@mui/system';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';


function ProductCategory() {


    
    return (
        <>
            <Navbar />

            <p className='location'> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Shop <FontAwesomeIcon icon = {faAngleRight} /></b>&nbsp; Category</p>

            <div className="product_category_contaier">
                    <div className='ldiv'>
{/* material accordian */}




      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Category</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <FormGroup>
      <FormControlLabel name='tic' control={<Checkbox  />} label="Skin Care" />
      <FormControlLabel name='tic2' control={<Checkbox />} label="Lip Care" />
      <FormControlLabel name='tic2' control={<Checkbox />} label="Hair" />
      <FormControlLabel name='tic2' control={<Checkbox />} label="Perfumes" />
      <FormControlLabel name='tic2' control={<Checkbox defaultChecked />} label="Makeup" />
      <FormControlLabel name='tic2' control={<Checkbox />} label="Everyday" />
      <FormControlLabel name='tic2' control={<Checkbox />} label="Mens" />
    </FormGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion  expanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Sort By : Popularity</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Popularity" />
        <FormControlLabel value="male" control={<Radio />} label="Discount" />
        <FormControlLabel value="name" control={<Radio />} label="Name" />
        <FormControlLabel value="newArrivals" control={<Radio />} label="New Arrivals" />
        <FormControlLabel value="lth" control={<Radio />} label="Price Low To High" />
        <FormControlLabel value="htl" control={<Radio />} label="Price High To Low" />
        <FormControlLabel value="rating" control={<Radio />} label="Ratings" />
      </RadioGroup>
    </FormControl>
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion  >

        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Gender</Typography>
          </AccordionSummary>


        <AccordionDetails>
          <Typography>
          <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
    </FormControl>
          </Typography>
        </AccordionDetails>



      </Accordion>

      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Price Range</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <FormGroup>
      <FormControlLabel name='tic' control={<Checkbox  />} label="Rs. 0 - Rs . 499" />
      <FormControlLabel name='tic2' control={<Checkbox />} label="Rs. 500 - Rs . 999" />
      <FormControlLabel name='tic2' control={<Checkbox />} label="Rs. 1000 - Rs . 1999" />
      <FormControlLabel name='tic2' control={<Checkbox />} label="Rs. 2000 - Above" />
    </FormGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>















{/* Ends here... */}

























                    </div>




                    <div className='rdiv'>


                    <div>
                        <img src="https://www.frankbody.com/int/wp-content/uploads/2022/11/frank-body-best-selling-besties-kit_DOT.COM_UK_VESSEL-1.jpg" alt="Not Found" />

                        <h6 className='prod_name'>Carlton London Perfume Limited Edition Blush Perfume</h6>
                        <div className="price_outer">
                        <div> <span>⭐⭐⭐⭐⭐</span> <b className='ttd'>&#x20B9; 299</b></div>
                        </div>

                        <div className='btn_outer'>
                            <button className="atc22">Add To Cart</button>
                            <button className='testbtn'>Buy Now</button>
                        </div>

                    </div>



                    </div>



            </div>



        </>
    );
}

export default ProductCategory;