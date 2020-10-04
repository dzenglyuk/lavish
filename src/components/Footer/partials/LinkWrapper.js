import React from "react";
import { Link } from "react-router-dom";

const LinkWrapper = ({ linkObjects }) => {
    return (
        <div className="footer-link-wrapper">
            {linkObjects.map((linkObject) => (
                <div className="footer-link-items" key={linkObject.title}>
                    <h2>{linkObject.title}</h2>
                    {linkObject.links.map((link) => (
                        <Link to={link.value} key={link.name}>
                            {link.name}
                        </Link>
                    ))}
                </div>
            ))}
        </div>
    );
};

LinkWrapper.propTypes = {
    linkObjects: (props, propName, componentName) => {
        const propValue = (props || {})[propName];
        const isNotArray = (value) => !Array.isArray(value);

        if (propValue === undefined)
            return new Error(
                `${propName} of component ${componentName} is required`
            );

        if (isNotArray(propValue))
            return new Error(
                `${propName} of component ${componentName} must be array`
            );

        if (typeof propValue[0] !== "object")
            return new Error(
                `${propName} of component ${componentName} must be array of objects`
            );

        return null;
    }
};

export default LinkWrapper;
