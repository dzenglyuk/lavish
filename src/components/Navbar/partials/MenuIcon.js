import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const MenuIcon = ({ clicked, handleClick }) => {
    return (
        <div className="menu-icon" onClick={handleClick}>
            {clicked ? <FaTimes /> : <FaBars />}
        </div>
    );
};

MenuIcon.defaultProps = {
    clicked: false,
};

export default MenuIcon;
