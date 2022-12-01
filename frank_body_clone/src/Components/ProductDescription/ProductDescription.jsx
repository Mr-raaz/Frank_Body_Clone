import React, { useEffect, useState } from 'react';
import Navbar from '../LandingPage/TopSection/Navbar/Navbar';
import './ProductDescription.css';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Details_page from './ProdDesComponent/Details_page';
import { Footer } from '../Footer/footer';
import ShoppingOfferSection from '../ProductPage/product_page_comp/InitialOfferSection/ShoppingOfferSection';
function ProductDescription() {

    const [currProd , setProd] = useState([]);


    let {id} = useParams();


    useEffect(()=>{

            getProductDetails();
            
    },[])

    async function getProductDetails(){

        let res = await fetch(`https://frankbodyapi.herokuapp.com/products/${id}`);
        let data = await res.json()

        setProd([data]);

    }

    return (
        <>
        <Navbar />

            {
                currProd.map((elem)=>{
                    return <Details_page key={elem.id} {...elem}/>
                })
            }



            
<ShoppingOfferSection />
                <Footer />
        </>
    );
}

export default ProductDescription;