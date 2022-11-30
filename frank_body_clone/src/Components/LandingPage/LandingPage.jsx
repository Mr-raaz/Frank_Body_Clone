import { Footer } from "../Footer/footer";
import "./LandingPage.css";
import b1 from "./images/bottom-1.webp";
import b2 from "./images/bottom-2.webp";
import b3 from "./images/bottom-3.webp";
import b4 from "./images/bottom-4.webp";
import bfi1 from "./images/buttfrominsta/bfi1.webp"
import bfi2 from "./images/buttfrominsta/bfi2.webp"
import bfi3 from "./images/buttfrominsta/bfi3.webp"
import bfi4 from "./images/buttfrominsta/bfi4.webp"
import bannerI1 from "./images/original-THG-PRIMARY-BANNER-SUSTAINABILITY1920x700-113847.webp";

function LandingPage() {
        const kitData =async ()=>{
            var res = await fetch("https://frankbodyapi.herokuapp.com/products");
            var data = await res.json();
            return data;
        }
        const z = kitData();
        console.log(z);

    return (
        <div>
        <div id="signUpadvt">
            <h2>Sign Up to Save 15% on your first order</h2>
        </div>
        <div id="whatsHot">
            <h2>What's hot</h2>
            
        </div>
        <div id="dreamBanner">
            <h2>You've been in my dreams, babe...</h2>
            <p>Time for me to get into yours</p>
            <button class="dreamBannerBtn">shop in your dreams scrub & soak</button>
        </div>
        <div id="getYourKitOf">
            <h2>Get your kit of</h2>
            
        </div>
        <div id="buttFromInstagram">
            <h2>Butt from Instagram.</h2>
            <div className="buttFromInstagramImagContainer">
                <div className="alignBFI" >
                    <img src={bfi1} className="bFICRound"></img>
                </div>
                <div className="alignBFI" >
                    <img src={bfi2} className="bFICRound"></img>
                </div>
                <div className="alignBFI" >
                    <img src={bfi3} className="bFICRound"></img>
                </div>
                <div className="alignBFI" >
                    <img src={bfi4} className="bFICRound"></img>
                </div>

            </div>
        </div>
        <div id="bannerShowCase">
            <a href="" className="bannerI1Link"><img src={bannerI1} className="fullsizeB"></img>
        <div className="ImageOverText">
            <h2>I'm committed to<br></br>being climate-<br></br>positive by 2023</h2>
            <button>Read More</button>
        </div>
        </a>
        </div>
        <div id="bottom_features">
            <div className="bottom_features_container">
                <img src={b1} className="bf_img"></img>
                <img src={b2} className="bf_img"></img>
                <img src={b3} className="bf_img"></img>
                <img src={b4} className="bf_img"></img>
            </div>
        </div>
        <Footer />
        </div>
    );
}

export default LandingPage;