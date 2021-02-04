import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img
                // className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Audio/Hdpns_Gw_3000x1200._CB415716258_.jpg" alt="" />
                // className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/jan/Blockbuster_entertainment/EN/3000x1200_Hero-Tall_NP._CB660702447_.jpg" alt="" />
                // {/* className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/TheGreatEscapistsS1/TGET_S1_GWBleedingHero_FT_COVIDUPDATE_XSite_3000X1200_PV_en-GB._CB660604320_.jpg" alt="" /> */}
                className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/vivo/2021/Jan/BAU/gw/D20071665_WL_VIVO_BAU_Jan21_tallhero_3000x1200._CB661014126_.jpg" alt="" />

            <div className="home__row">
                <Product
                    id="1"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback – 6 October 2011"
                    price={29.99}
                    image="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY327_FMwebp_QL65_.jpg"
                    rating={5}
                />
                <Product
                    id="2"
                    title="Mi Smart Band 5-1.1” AMOLED Color Display, 2 Weeks Battery Life, 5ATM Water Resistant"
                    price={2499.00}
                    image="https://images-na.ssl-images-amazon.com/images/I/719ZywAmvOL._SL1500_.jpg"
                    rating={3}
                />

            </div>
            <div className="home__row">
                <Product
                    id="3"
                    title="OnePlus 8T 5G (Aquamarine Green, 8GB RAM, 128GB Storage)"
                    price={42999.00}
                    image="https://images-na.ssl-images-amazon.com/images/I/71m05O2uNdL._SL1500_.jpg"
                    rating={4}
                />
                <Product
                    id="4"
                    title="Echo Dot (3rd Gen) – Smart speaker with Alexa (Black)"
                    price={3499.00}
                    image="https://images-na.ssl-images-amazon.com/images/I/61%2BQNG8IiPL._SL1000_.jpg"
                    rating={5}
                />
                <Product
                    id="5"
                    title="Mi 10000mAH Li-Polymer Power Bank 3i with 18W Fast Charging (Midnight Black)"
                    price={3499.00}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Rcb9pnbEL._SL1500_.jpg"
                    rating={4}
                />

            </div>
            <div className="home__row">
                <Product
                    id="6"
                    title="New Apple MacBook Air with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD) - Space Grey (Latest Model)"
                    price={80000.00}
                    image="https://images-na.ssl-images-amazon.com/images/I/71jG%2Be7roXL._SL1500_.jpg"
                    rating={5}
                />
            </div>
        </div>

    );
}

export default Home
