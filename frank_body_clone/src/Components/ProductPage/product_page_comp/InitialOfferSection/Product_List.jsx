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

    const [currpage , setPage] = useState(1);

    const [filtered , setFiltered] = useState([]);

    // const [displaying , setDisplaying] = useState([]);

    const dispatch = useDispatch();

    function updatefilte(val){

        setFiltered(val);

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
            
            // layout

            // transition={{duration:0.35 , ease: "easeOut"}}
            
            >
                       <AnimatePresence> {
                            filtered.map((elem , idx)=>{
                                return <>
                                
                                {idx >=(currpage*10) && idx<((currpage+1)*10) ? <Card {...elem}/> : null}
                                
                                </>
                            })
                        }</AnimatePresence>
                        
                        
            </m.div>
        </>
    );
}

export default Product_List;