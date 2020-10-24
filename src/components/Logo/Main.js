import React from "react";
import { Link } from "react-router-dom";
import { MdFingerprint } from "react-icons/md";

const Logo = ({ className, handleClick }) => {
    return (
        <Link to="/" className={className} onClick={handleClick}>
            <MdFingerprint className="navbar-icon" data-testid="logo-icon"/>
            LAVISH
        </Link>
    );
};

Logo.defaultProps = {
    className: "navbar-logo",
    handleClick: null
}

export default Logo;
