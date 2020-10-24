import React from "react";
import HomeSection from "../../components/HomeSection/Main";
import PricingSection from "../../components/PricingSection/Main";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "../Data";

const HomePage = () => {
    return (
        <React.Fragment>
            <HomeSection {...homeObjOne} />
            <HomeSection {...homeObjTwo} />
            <HomeSection {...homeObjThree} />
            <PricingSection />
            <HomeSection {...homeObjFour} />
        </React.Fragment>
    )
}

export default HomePage;
