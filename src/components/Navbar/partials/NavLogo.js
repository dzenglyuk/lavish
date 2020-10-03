import React from "react";
import { Link } from "react-router-dom";
import { MdFingerprint } from "react-icons/md";

const NavLogo = ({ handleClick }) => {
    return (
        <Link to="/" className="navbar-logo" onClick={handleClick}>
            <MdFingerprint className="navbar-icon" />
            LAVISH
        </Link>
    );
};

export default NavLogo;
