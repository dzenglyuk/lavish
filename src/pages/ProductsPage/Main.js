import React from "react";
import HomeSection from "../../components/HomeSection/Main";
import { homeObjTwo, homeObjThree } from "../Data"; 

const Main = () => {
    return (
        <React.Fragment>
            <HomeSection {...homeObjTwo} />
            <HomeSection {...homeObjThree} />
        </React.Fragment>
    )
}

export default Main;
