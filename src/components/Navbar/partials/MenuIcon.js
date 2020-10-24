import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const MenuIcon = ({ clicked, handleClick }) => {
    return (
        <div className="menu-icon" onClick={handleClick} data-testid="menu-icon">
            {clicked ? <FaTimes data-testid="times-icon"/> : <FaBars data-testid="bars-icon"/>}
        </div>
    );
};

MenuIcon.defaultProps = {
    clicked: false,
};

export default MenuIcon;
