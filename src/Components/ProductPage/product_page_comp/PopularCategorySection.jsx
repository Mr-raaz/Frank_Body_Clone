import React from 'react';
import './popularcat.css';
function PopularCategorySection() {
    return (
        <>
            <div className="popular_cat">
                <div className="headings">
                    <h2>Popular Categories</h2>
                    <p>When The Going Gets Tough, The Tough Get Category.</p>
                </div>

                <div className="grid_system">
                    <div>
                        <img src="https://images-static.nykaa.com/uploads/d4c94291-9176-46f4-aee0-6ed3f8a198c3.jpg?tr=w-400,cm-pad_resize" alt="Not Found" />
                        <h3>Makeup</h3>
                    </div>


                    <div>
                        <img src="https://images-static.nykaa.com/uploads/43292e81-eee6-4abc-9b99-717c3f2c1cf9.jpg?tr=w-400,cm-pad_resize" alt="Not Found" />
                        <h3>Perfumes</h3>
                    </div>

                    <div>
                        <img src="https://images-static.nykaa.com/uploads/ca835c52-d2a0-45ea-9a8f-300a4c745f02.jpg?tr=w-400,cm-pad_resize" alt="Not Found" />
                        <h3>Skin Care</h3>
                    </div>

                    <div>
                        <img src="https://images-static.nykaa.com/uploads/4896f9e4-b88a-4f1b-a0b6-b42a8e8a60da.jpg?tr=w-400,cm-pad_resize" alt="Not Found" />
                        <h3>Hair Care</h3>
                    </div>


                    
                </div>
            </div>
        </>
    );
}

export default PopularCategorySection;