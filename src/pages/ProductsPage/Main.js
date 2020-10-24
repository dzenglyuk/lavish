import React from "react";
import HomeSection from "../../components/HomeSection/Main";
import { homeObjTwo, homeObjThree } from "../Data"; 

const ProductsPage = () => {
    return (
        <React.Fragment>
            <HomeSection {...homeObjTwo} />
            <HomeSection {...homeObjThree} />
        </React.Fragment>
    )
}

export default ProductsPage;
