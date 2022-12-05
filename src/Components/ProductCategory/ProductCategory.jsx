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
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';

function ProductCategory() {

    let {type} = useParams();

    const [type2 , setType] = useState(type);

    if(type2 == 'Lipcare'){
      setType("Lip care")
    }


    function handleCat(val){
      setType(val)
    }
    const [data2 , setData2] = useState([])

    const [sort , setSort] = useState("")

      const data = useSelector((store) => store.products);


      useEffect(()=>{
        setData2(data);
      },[])
      
      const navigate = useNavigate();

      function handleDesRedirect(val){
        navigate(`/details/${val}`)
      }

      function handleSortlth(val){
       if(val == 'lth'){
        let temp = data2.sort(function (a, b) {
          if (a.best_price > b.best_price) {
            return 1;
          }
          if (a.best_price < b.best_price) {
            return -1;
          }
          return 0;
        });
        setData2([...temp]);
       } else if (val == 'htl'){
        let temp = data2.sort(function (a, b) {
          if (a.best_price > b.best_price) {
            return -1;
          }
          if (a.best_price < b.best_price) {
            return 1;
          }
          return 0;
        });
        setData2([...temp]);
       } else if (val == 'asc'){
        let temp =data2.sort(function (a, b) {
          if (a.prod_name > b.prod_name) {
            return 1;
          }

          if (a.prod_name < b.prod_name) {
            return -1;
          }

          return 0;
        });
        setData2([...temp]);
       }
      }

    function sortbyPrice(a, b){
      let temp = data.filter((elem)=>{
        return elem.best_price >= a && elem.best_price <=b
          
        
      })

      setData2([...temp])
      console.log(temp);
    }
    return (
        <>
            <Navbar />

            <p className='location'> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Shop <FontAwesomeIcon icon = {faAngleRight} /></b>&nbsp; {type2}</p>

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
      <FormControlLabel name='tic' control={<Checkbox  checked = {type2 == "Skin Care" ? true : false} />} label="Skin Care"  onClick={()=> handleCat("Skin Care")}/>
      <FormControlLabel name='tic2' control={<Checkbox checked = {type2 == "Lip care" ? true : false} />} label="Lip Care"  onClick={()=> handleCat("Lip care")}/>
      <FormControlLabel name='tic2' control={<Checkbox checked = {type2 == "hAIR" ? true : false} />} label="Hair" onClick={()=> handleCat("HAIR")} />
      <FormControlLabel name='tic2' control={<Checkbox checked = {type2 == "Perfumes" ? true : false}/>} label="Perfumes" onClick={()=> handleCat("Perfumes")} />
      <FormControlLabel name='tic2' control={<Checkbox  checked = {type2 == "makeup" ? true : false}/>} label="Makeup"  onClick={()=> handleCat("makeup")}/>
      <FormControlLabel name='tic2' control={<Checkbox checked = {type2 == "EVERYDAY" ? true : false}/>} label="Everyday" onClick={()=> handleCat("EVERYDAY")}/>
      <FormControlLabel name='tic2' control={<Checkbox disabled />} label="Mens" />
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
        <FormControlLabel value="name" control={<Radio />} label="Name"  onClick={()=>handleSortlth("asc")}/>
        <FormControlLabel value="newArrivals" control={<Radio />} label="New Arrivals" />
        <FormControlLabel value="lth" control={<Radio />} label="Price Low To High" onClick={()=>handleSortlth("lth")} />
        <FormControlLabel value="htl" control={<Radio />} label="Price High To Low" onClick={()=>handleSortlth("htl")}/>
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

      <Accordion expanded >
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
      <FormControlLabel name='tic' control={<Checkbox  />} label="Rs. 0 - Rs . 499"  onClick={()=> sortbyPrice(0 , 499)} />
      <FormControlLabel name='tic2' control={<Checkbox />} label="Rs. 500 - Rs . 999"   onClick={()=> sortbyPrice(500 , 999)}/>
      <FormControlLabel name='tic2' control={<Checkbox />} label="Rs. 1000 - Rs . 1999"  onClick={()=> sortbyPrice(1000 , 1999)} />
      <FormControlLabel name='tic2' control={<Checkbox />} label="Rs. 2000 - Above"   onClick={()=> sortbyPrice(2000 , 9999999)}/>
    </FormGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>















{/* Ends here... */}

























                    </div>




                    <div className='rdiv'>


                    {
                      data2.map((elem) => {
                        return (
                          <>
                            {
                              elem.categories == type2 ?  <>
                          <div className='productCate_card'>

                        <img src={elem.url_1} alt="Not Found" onClick={()=> handleDesRedirect(elem.id)}/>

                        <h6 className='prod_name' onClick={()=> handleDesRedirect(elem.id)}>{elem.prod_name}</h6>
                        <div className="price_outer" onClick={()=> handleDesRedirect(elem.id)}>
                        <div> <span>⭐⭐⭐⭐⭐</span> <b className='ttd'>&#x20B9; {elem.best_price}</b></div>
                        </div>

                        <div className='btn_outer'>
                            <button className="atc22">Add To Cart</button>
                            <button className='testbtn'>Buy Now</button>
                        </div>

                    </div>
                          </> : null
                            }
                          </>
                        )
                      })
                    }



                    </div>



            </div>



        </>
    );
}

export default ProductCategory;