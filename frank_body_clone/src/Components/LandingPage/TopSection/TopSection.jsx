import React from 'react';
import Navbar from './Navbar/Navbar';
import TopBanner from './TopBanner/TopBanner';
import Delivery_related from './ThirdSection/Delivery_related';
function TopSection() {
    return (
        <>
            <Navbar />
            <TopBanner />
            <Delivery_related />
        </>
    );
}

export default TopSection;