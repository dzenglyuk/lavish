import React from "react";
import Subscription from "./partials/Subscription";
import SocialMedia from "./partials/SocialMedia";
import LinkWrapper from "./partials/LinkWrapper";
import { infoLinks, socialLinks } from "./Data";

import "./Main.css";

const Footer = () => { 
    return (
        <div className="footer-container">
            <Subscription />
            <div className="footer-links">
                <LinkWrapper linkObjects={infoLinks}/>
                <LinkWrapper linkObjects={socialLinks}/>
            </div>
            <SocialMedia />
        </div>
    );
};

export default Footer;
