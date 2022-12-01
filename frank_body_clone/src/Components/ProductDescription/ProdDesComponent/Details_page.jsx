import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
function Details_page({ prod_name, url_1, url_2  , categories , mrp , best_price}) {
  return (
    <>
      <div className="location_product_des">
        <p className="location">
          {" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <b>
            Shop <FontAwesomeIcon icon={faAngleRight} />
          </b>
          &nbsp; Details
        </p>
      </div>

      <div className="product_detail_outer">
        <div className="firstContaier">
          <div className="other_images_container">
            <div>
              <img src={url_2} alt="" />
            </div>

            <div>
              <img
                src="https://images-static.nykaa.com/media/catalog/product/6/a/6af872e8904207503758_2.jpg"
                alt="not found"
              />
            </div>
            <div>
              <img
                src="https://images-static.nykaa.com/media/catalog/product/6/a/6af872e8904207503758_5.jpg"
                alt="not found"
              />
            </div>
            <div>
              <img
                src="https://images-static.nykaa.com/media/catalog/product/e/0/e0ca2ce3607347879367_6.jpg"
                alt="not found"
              />
            </div>
          </div>

          <div className="image_container">
            <img src={url_1} alt="Not Found" />
          </div>
        </div>

        <div className="product_info">
            <div className="product_name_price">
            <h3>{prod_name}</h3>
            <p className="rating"> ⭐⭐⭐⭐⭐ <span >43 ratings & 15 reviews</span></p>

            <p className="cate"><span>{categories}</span> <span>Body Care</span></p>
            </div>
            

            <p className="price_sec"> <span className="mrp">Best Price: </span>   <span className="normal_price"> &nbsp; &#x20B9;{best_price}</span> <span className="discount"> 15% Off</span></p>
            <p className="tax">(Inclusive all taxes)</p>

            <div className="otherDetails">
                <p>*This product cannot be returned for a refund or exchange.</p>
                <p>*Country of Origin: Germany</p>
                <p>*Mkf: Frank Body</p>
                <p>*Delivery charges if applicable will be applied at checkout</p>
            </div>

            <div className="atcbtn3">
                <button>Add To Cart</button>
                <button>Buy Now</button>
            </div>
        </div>
      </div>
    </>
  );
}

export default Details_page;
