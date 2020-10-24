import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ title, path, handleClick }) => {
    return (
        <li className="nav-item" onClick={handleClick}>
            <Link to={path} className="nav-links" data-testid="nav-item-link">
                {title}
            </Link>
        </li>
    );
};

NavItem.defaultProps = {
    title: "Home",
    path: "/",
};

export default React.memo(NavItem);
