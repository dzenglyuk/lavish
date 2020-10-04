import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "../../Button/Main";

const PriceCard = ({ path, info, features, icon, btnColor }) => {
    const { name, price, period } = info;
    return (
        <Link to={path} className="pricing__container-card">
            <div className="pricing__container-cardInfo">
                <div className="icon">{icon}</div>
                <h3> {name} </h3>
                <h4> {price} </h4>
                <p> {period} </p>
                <ul className="pricing__container-features">
                    {features.map((feature) => (
                        <li key={feature}>{feature}</li>
                    ))}
                </ul>
                <Button btnSize="btn--wide" btnColor={btnColor}>
                    Choose Plan
                </Button>
            </div>
        </Link>
    );
};

PriceCard.defaultProps = {
    path: "/sign-up",
    btnColor: "primary",
};

PriceCard.propTypes = {
    icon: PropTypes.element.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    info: (props, propName, componentName) => {
        const propValue = (props || {})[propName];
        const requiredProps = ["name", "price", "period"];

        if (propValue === undefined)
            return new Error(
                `${propName} of component ${componentName} is required`
            );

        if (typeof propValue !== "object")
            return new Error(
                `${propName} of component ${componentName} must be array`
            );

        requiredProps.map((prop) =>
            prop in propValue
                ? null
                : new Error(
                      `${propName} of component ${componentName} must include ${prop} value`
                  )
        );

        return null;
    },
};

export default PriceCard;
