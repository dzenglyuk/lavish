import React from "react";
import Button from "../Button/Main";
import { Link } from "react-router-dom";
import "./Main.css";

const HomeSection = ({
    lightBg,
    topLine,
    lightText,
    lightTextDesc,
    headLine,
    description,
    buttonLabel,
    img,
    alt,
    imgStart,
}) => {
    return (
        <div className={lightBg ? "home__section" : "home__section darkBg"}>
            <div className="container">
                <div
                    className="row home__home-row"
                    style={{
                        display: "flex",
                        flexDirection:
                            imgStart === "start" ? "row-reverse" : "row",
                    }}
                >
                    <div className="col">
                        <div className="home__text-wrapper">
                            <div className="top-line">{topLine}</div>
                            <h1 className={lightText ? "heading" : "heading dark"}>{headLine}</h1>
                            <p className={lightTextDesc ? "home__subtitle" : "home__subtitle dark"}> {description} </p>
                            <Link to="/sign-up">
                                <Button btnSize="btn--wide" btnColor="blue">{buttonLabel}</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="home__img-wrapper">
                            <img src={img} alt={alt} className="home__img"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSection;
