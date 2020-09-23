import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons/lib";

import NavItem from "./partials/NavItem";
import MenuIcon from "./partials/MenuIcon";
import NavLogo from "./partials/NavLogo";
import SignBtn from "./partials/SignBtn";

import "./Main.css";

const Navbar = ({ pages }) => {
    const [clicked, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick((click) => !click);
    const closeMobileMenu = () => {
        console.log('clicked');
        setClick(false);
    }
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton(false);
    }, []);

    window.addEventListener("resize", showButton);

    return (
        <React.Fragment>
            <IconContext.Provider value={{ color: "#fff" }}>
                <div className="navbar">
                    <div className="navbar-container container">
                        <NavLogo handleClick={closeMobileMenu} />
                        <MenuIcon clicked={clicked} handleClick={handleClick} />
                        <ul
                            className={clicked ? "nav-menu active" : "nav-menu"}
                        >
                            {pages.map((page, index) => (
                                <NavItem
                                    key={index}
                                    {...page}
                                    handleClick={closeMobileMenu}
                                />
                            ))}
                            <SignBtn button={button} handleClick={closeMobileMenu}/>
                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
        </React.Fragment>
    );
};

export default React.memo(Navbar);
