import React from "react";
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";
import SocialLink from "./SocialLink";
import Logo from "../../Logo/Main";

const SocialMedia = () => {
    const links = [
        { name: "Facebook", icon: <FaFacebook /> },
        { name: "Instagram", icon: <FaInstagram /> },
        { name: "Youtube", icon: <FaYoutube /> },
        { name: "Twitter", icon: <FaTwitter /> },
        { name: "LinkedIn", icon: <FaLinkedin /> },
    ];
    return (
        <section className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Logo className="social-logo" />
                </div>
                <small className="website-rights">LAVISH © 2020</small>
                <div className="social-icons">
                    {links.map((link) => (
                        <SocialLink aria={link.name} key={link.name}>
                            {link.icon}
                        </SocialLink>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialMedia;
