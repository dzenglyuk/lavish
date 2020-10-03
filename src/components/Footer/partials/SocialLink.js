import React from "react";
import { Link } from "react-router-dom";

const SocialLink = ({ className, path, targetValue, aria, children }) => {
    return (
        <Link
            className={className}
            to={path}
            target={targetValue}
            aria-label={aria}
        >
            {children}
        </Link>
    );
};

SocialLink.defaultProps = {
    className: "social-icon-link",
    path: "/",
    targetValue: "_blank",
    aria: "",
};

export default SocialLink;
