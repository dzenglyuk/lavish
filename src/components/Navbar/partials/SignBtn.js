import React from "react";
import { Link } from "react-router-dom";

import Button from "../../../components/Button/Main";

const SignBtn = ({ button, handleClick }) => {
    return (
        <li className="nav-btn" onClick={handleClick}>
            <Link to="/sign-up" className="btn-link" data-testid="sign-btn">
                <Button
                    btnStyle="btn--outline"
                    btnSize={button ? null : "btn--mobile"}
                >
                    SIGN UP
                </Button>
            </Link>
        </li>
    );
};

SignBtn.defaultProps = {
    button: false,
    handleClick: null
};

export default React.memo(SignBtn);
