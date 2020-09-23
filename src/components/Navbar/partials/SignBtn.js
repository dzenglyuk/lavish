import React from "react";
import { Link } from "react-router-dom";

import Button from "../../../components/Button/Main";

const SignBtn = ({ button, handleClick }) => {
  return (
        <li className="nav-btn" onClick={() => button ? null: handleClick()}>
            <Link to='/sign-up' className="btn-link">
                <Button btnStyle="btn--outline" btnSize={button ? null : "btn--mobile"}>
                    SIGN UP
                </Button>
            </Link>
        </li>
    );
};

export default React.memo(SignBtn);