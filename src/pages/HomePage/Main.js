import React from "react";
import HomeSection from "../../components/HomeSection/Main";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data"; 

const Main = () => {
    return (
        <React.Fragment>
            <HomeSection {...homeObjOne} />
            <HomeSection {...homeObjTwo} />
            <HomeSection {...homeObjThree} />
            <HomeSection {...homeObjFour} />
        </React.Fragment>
    )
}

export default Main;
