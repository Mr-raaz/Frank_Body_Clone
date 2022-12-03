import React from 'react';
import {motion as m } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
function Maximise() {

const navigate = useNavigate();

    function handleCatClick(val){
        navigate(`/category/${val}`);
    }

    return (
        <>
           <m.div className="maximise_beauty_section"  

            
           >
           <h3>Maximize Your Beauty</h3>


                     <div className="outer">
                        <div className="inner"  onClick={()=> handleCatClick("Lipcare")}>
                            <div className='testing'>
                            <img src="https://images.aqualogica.in/catalog/product/a/q/aqlipmask_website.jpg" alt="Not found" />
                            </div>
                            <h5>Lip Care</h5>
                        </div>

                        <div className="inner" onClick={()=> handleCatClick("makeup")}>
                            <div className='testing'>
                            <img src="https://images.lifestyleasia.com/wp-content/uploads/sites/7/2020/12/22164003/44737027_1988035297909598_5577300803800006656_o.jpg" alt="Not found" />
                            </div>
                            <h5>Makeup</h5>
                        </div>

                        <div className="inner" onClick={()=> handleCatClick("Perfumes")}>
                            <div className='testing'>
                            <img src='https://www.pyd.es/content-web-pyd/media/2022/03/HALLOWEEN_Halloween-Edt_Halloween-Blue-Drop_Halloween-Magic_Social-Media-Image_1080x1080_Flowers.jpg' alt="Not found" />
                            </div>
                            <h5>Perfumes</h5>
                        </div>

                        <div className="inner" onClick={()=> handleCatClick("eyecare")}>
                            <div className='testing'>
                            <img src="https://images.lifestyleasia.com/wp-content/uploads/sites/7/2020/12/22171618/18491823_10155098274426251_5713637478169321191_o-1536x1536.jpg" alt="Not found" />
                            </div>
                            <h5>Eye Care</h5>
                        </div>

                        <div className="inner" onClick={()=> handleCatClick("foundation")}>
                            <div className='testing'> 
                            <img src="https://images.lifestyleasia.com/wp-content/uploads/sites/7/2020/12/22160012/unnamed.jpg" alt="Not found" />
                            </div>
                            <h5>Foundation</h5>
                        </div>
                        
                     </div>


           </m.div>
        </>
    );
}

export default Maximise;