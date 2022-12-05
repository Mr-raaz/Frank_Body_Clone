import React from 'react';
import './brandSection.css';
function BrandSection() {
    return (
        <>
            <div className="brandSection">
                <h2>Pick Your Favorite Brand</h2>
                <p>Sometimes you Feel like a Pick brand, Sometimes You Don't .  </p>


                <div className='brandCategory_outer'>

                    <div>
                        <div>
                            <img src="https://sunshinebeautycentre.com/wp-content/uploads/2020/08/re1-600x600.jpg" alt="Not found" />
                        </div>
                        <h3>LAKME</h3>

                    </div>




                    <div>
                    <div>
                            <img src="https://ik.imagekit.io/hng/pdp/546201_2.jpg?v=1" alt="Not found" />
                        </div>
                        <h3>MAYBELLINE</h3>
                    </div>




                    <div>




                    
                    <div>
                            <img src="https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,dpr-2/static/img/product/121450/colorbar-amino-skin-radiant-foundation-ivory-fair-001-15-g_4_display_1566809404_a57ee888.jpg" alt="Not found" />
                        </div>
                        <h3>COLOR BAR</h3>
                    </div> 


                    
                    <div className='tab_res'>

                    
                    <div>
                            <img src="https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EWXNY2_600x600_0.jpg" alt="Not found" />
                        </div>
                        <h3>BOBBIE BROWN</h3>
                    
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default BrandSection;