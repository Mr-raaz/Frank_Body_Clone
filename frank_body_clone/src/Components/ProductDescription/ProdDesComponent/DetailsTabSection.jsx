import React, { useState } from 'react';

function DetailsTabSection() {

    const [curr , seCurr] = useState("Des");

    


    return (
        <div className='seperate'>
           <div className="tabSection">
                <div className='btndoiv'>
                        <button className={curr == "Des" ? "btnselected" : null}   onClick={()=> seCurr("Des")}>Description</button>
                        <button className={curr == "Ing" ? "btnselected" : null}  onClick={()=> seCurr("Ing")}>Ingredients</button>
                        <button className={curr == "Oth" ? "btnselected" : null}  onClick={()=> seCurr("Oth")}>Other Information</button>
                </div>


              { curr == "Des" ? <div className='content'>

                M.A.C Studio Fix Fluid SPF 15 was put to the ultimate test of seeing how long it wears and, not surprisingly, the formula lasts for a full 24 hours! Applies, builds and blends easily and evenly while controlling shine. This modern foundation combines a matte finish and medium-to-full buildable coverage with broad spectrum SPF 15 protection. <br /> <br />

<b>Benefits : </b> <br />

- Oil control up to 6 hours <br />
- Immediate and 8 hour moisture (All Day) <br />
- Sweat and humidity resistant <br />

- 24 hours of wear   <br />
- Color true 24 hours  <br />
- Non-fading 24 hours  <br />
- Non-creasing / non-settling 24 hours  <br />
- Non-streaking 24 hours  <br />
- Non-caking 24 hours  <br />
- Non-poring  <br />
- Immediately smooths skin's appearance  <br />
- Broad Spectrum UVA/UVB, SPF15, PA ++ <br />
- Smooths skin's appearance <br />
- Protects skin from dehydration <br />
- Comfortable all day <br />
- Appropriate for all skin types <br />
- Non-acnegenic <br />
- Dermatologist tested <br />
- Oil free




                </div>  : null}







                { curr == "Oth" ? <div className='content'>

                <b>Country of Origin:</b> <br /> Belgium / Canada / Czech Republic / Dominican Republic / France / Germany / Italy / Japan / South Korea / Mexico / North Macedonia / Poland / Switzerland <br /> <br />


<b>Generic Name:</b> Makeup <br />


<b>Name of Mfg / Brand:</b> Estee Lauder Companies <br />

<b>Address of Mfg / Brand:</b> the Estee Lauder Companies INC,767,fifth Avenue,New York,10153,United States of America <br /> <br />



Explore the entire range of Foundation available on Nykaa. Shop more M.A.C products here.You can browse through the complete world of M.A.C Foundation . <br />
Alternatively, you can also find many more products from the M.A.C Studio Fix Fluid SPF 15 range.

 <br /> <br />

Expiry Date: 15 July 2023
Country of Origin:  Belgium
<br /><br />
Manufacturer:  Estee lauder Companies
Address:  the Estee Lauder Companies INC,767,fifth Avenue,NY,10153,United States of America



                </div>  : null}


                {curr == "Ing" ? <div className='content'>
                Water\\Aqua\\Eau, Cyclopentasiloxane, Peg-10 Dimethicone, Butylene Glycol, Trimethylsiloxysilicate, Ethylhexyl Methoxycinnamate, Dimethicone, Magnesium Sulfate, Titanium Dioxide, Laminaria Saccharina Extract, Algae Extract, Tocopheryl Acetate, Sodium Hyaluronate, Tocopherol, Lecithin, Hydrogenated Lecithin, Xanthan Gum, Sorbitan Sesquioleate, Methoxy Amodimethicone/Silsesquioxane Copolymer, Laureth-7, Dipropylene Glycol, Dimethicone/Peg-10/15 Crosspolymer, Dimethicone/Peg-10 Crosspolymer, Peg/Ppg-18/18 Dimethicone, Disteardimonium Hectorite, Silica, Dimethicone Crosspolymer, Triethoxycaprylylsilane, Propylene Carbonate, Pentaerythrityl Tetra-Di-T-Butyl Hydroxyhydrocinnamate, Sorbic Acid, Chloroxylenol, Phenoxyethanol, [+/- Titanium Dioxide (Ci 77891), Iron Oxides (Ci 77491), Iron Oxides (Ci 77492), Iron Oxides (Ci 77499), Chromium Oxide Greens (Ci 77288)]


<br /><br />


Please be aware that ingredient lists may change or vary from time to time. Please refer to the ingredient list on the product package you receive for the most up to date list of ingredients.
                </div> : null}
           </div>
        </div>
    );
}

export default DetailsTabSection;