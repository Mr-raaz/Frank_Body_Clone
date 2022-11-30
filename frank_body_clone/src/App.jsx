import React from 'react';
import "swiper/css/bundle";
import AllRoutes from './AllRoutes/AllRoutes';
import {AnimatePresence} from 'framer-motion';
function App() {
    return (
        
<AnimatePresence mode='wait'>
        <AllRoutes>



                {/* Home Component route has been created..... */}


        </AllRoutes>
        </AnimatePresence>
    );
}

export default App;