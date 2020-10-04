import React from "react";
import { Link } from "react-router-dom";
import { MdFingerprint } from "react-icons/md";

const Main = ({ className, handleClick }) => {
    return (
        <Link to="/" className={className} onClick={handleClick}>
            <MdFingerprint className="navbar-icon" />
            LAVISH
        </Link>
    );
};

Main.defaultProps = {
    className: "navbar-logo",
    handleClick: null
}

export default Main;
