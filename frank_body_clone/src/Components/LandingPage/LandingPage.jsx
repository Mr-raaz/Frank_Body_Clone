import TopSection from "./TopSection/TopSection";
import {motion as m} from 'framer-motion';
function LandingPage() {


    return (
        <>
            <m.div initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:0.35 , ease: "easeOut"}}
            exit={{opacity:1}}
            >
            
            <TopSection />
            
            </m.div>
            
        </>
    );
}

export default LandingPage;