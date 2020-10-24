import React from "react";
import { FaFire } from "react-icons/fa";
import { BsXDiamondFill } from "react-icons/bs";
import { GiCrystalize } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import PriceCard from "./partials/PriceCard";
import { starterAccount, goldAccount, diamondAccount } from "./Data";

import "./Main.css";

const PricingSection = () => {
    const title = "Pricing";
    return (
        <IconContext.Provider value={{ color: "#fff", size: 64 }}>
            <div>
                <div className="pricing__section">
                    <div className="pricing__wrapper">
                        <h1 className="pricing__heading"> {title} </h1>
                        <div className="pricing__container">
                            <PriceCard {...starterAccount} icon={<FaFire />} />
                            <PriceCard
                                {...goldAccount}
                                icon={<BsXDiamondFill />}
                                btnColor="blue"
                            />
                            <PriceCard
                                {...diamondAccount}
                                icon={<GiCrystalize />}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </IconContext.Provider>
    );
};

export default PricingSection;
