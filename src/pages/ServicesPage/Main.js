import React from "react";
import HomeSection from "../../components/HomeSection/Main";
import PricingSection from "../../components/PricingSection/Main";
import { homeObjFour } from "../Data"; 

const ServicesPage = () => {
    return (
        <React.Fragment>
            <PricingSection />
            <HomeSection {...homeObjFour} />
        </React.Fragment>
    )
}

export default ServicesPage;
