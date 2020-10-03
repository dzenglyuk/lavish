import React from "react";
import "./Main.css";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large", "btn--modile", "btn--wide"];
const COLORS = ["primary", "blue", "red", "green"];

const Button = ({ children, type, onClick, btnStyle, btnSize, btnColor }) => {
    const checkProp = (propName, propValue, name) => {
		let defaultProp = propName[0];
		if (name && name === 'color') defaultProp = '';
		return propName.includes(propValue) ? propValue : defaultProp;
    };
    
    return (
        <button
            className={`btn 
			${checkProp(STYLES, btnStyle)} 
			${checkProp(SIZES, btnSize)} 
			${checkProp(COLORS, btnColor, 'color')}`}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    );
};

Button.defaultProps = {
    btnStyle: "btn--primary",
    btnSize: null,
    btnColor: null
}

export default React.memo(Button);
