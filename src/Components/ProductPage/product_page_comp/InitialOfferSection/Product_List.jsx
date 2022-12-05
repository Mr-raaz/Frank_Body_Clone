import React, { useEffect } from 'react';
import '../../shop.css';
import { useState } from 'react';
import { useDispatch  , useSelector} from 'react-redux';
import mainAction from '../../../../ReduxStore/Actions/mainAction';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleRight, faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import Card from './Card';
import {motion as m , AnimatePresence} from 'framer-motion';
function Product_List() {

    const currActiveCat = useSelector((data) => data.activeCat);

    const sortingOrd = useSelector((data) => data.sortingOrder);
    
    console.log(currActiveCat);

    


    const [currpage , setPage] = useState(1);

    const [filtered , setFiltered] = useState([]);

    const [catfilter , setcatfilter] = useState([]);

    const dispatch = useDispatch();

    function updatefilte(val){

        setFiltered(val);

        setcatfilter(val)

    }

    useEffect(()=>{

        testingfunc();

        },[currActiveCat , sortingOrd])

    function testingfunc(){

        const temp = filtered.filter((elem)=>{

            if(currActiveCat == "All Products"){
                return true;
            }
            return elem.categories == currActiveCat;
        })
 
        if(sortingOrd == "lth") {

            temp.sort(function (a, b) {
                if (a.best_price > b.best_price) {
                  return 1;
                }
      
                if (a.best_price < b.best_price) {
                  return -1;
                }
      
                return 0;
              });


        }

        if(sortingOrd == "htl") {

            temp.sort(function (a, b) {
                if (a.best_price > b.best_price) {
                  return -1;
                }
      
                if (a.best_price < b.best_price) {
                  return 1;
                }
      
                return 0;
              });


        }

        setcatfilter(temp);

    }
    
    function updatePage(val){
        if(currpage + val >= 1 && currpage+val <= filtered.length / 10){
            setPage(currpage + val);
        }
    }
        

    useEffect(()=>{

        mainAction(dispatch , updatefilte);

       

    }, [])



    return (
        <>
        <div className="navigation_btn">
        <button onClick={()=>{updatePage(+1)}}><FontAwesomeIcon icon={faAngleRight} /></button> 
        <p>{currpage + 1}</p>
                        <p>{currpage}</p>
                        
                        <button onClick={()=>{updatePage(-1)}}><FontAwesomeIcon icon={faAngleLeft} /></button>
                        
                </div>
            <m.div className="productList_outer" 
            
            layout

            // transition={{duration:0.35 , ease: "easeOut"}}
            
            >


                {/* {console.log(catfilter)}; */}
                <AnimatePresence>
            {
                

                catfilter.length > 0 &&  catfilter.map((elem , idx)=>{
                                return <> 
                                
                    

                   {
                    currActiveCat != "All Products" ? <Card key={idx+22} data ={elem}/> : <> {idx >=(currpage*10) && idx<((currpage+1)*10) ? <Card key={idx+22} data = {elem}/> : null} </>
                   }
                


                                
                                </>
                            })
            }</AnimatePresence>
            
                       {/*  {

                       

                        }</AnimatePresence> */}
                        
                        
            </m.div>
        </>
    );
}

export default Product_List;