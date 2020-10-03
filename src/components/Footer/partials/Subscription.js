import React from "react";
import Button from "../../Button/Main";
import { subscription } from "../Data";

const Subscription = ({ heading, text }) => {
    return (
        <section className="footer-subscription">
            <p className="footer-subscription-heading">{heading}</p>
            <p className="footer-subscription-text">{text}</p>
            <div className="input-areas">
                <form>
                    <input
                        className="footer-input"
                        name="email"
                        type="email"
                        placeholder="Your Email"
                    />
                    <Button btnStyle="btn--outline">Subscribe</Button>
                </form>
            </div>
        </section>
    );
};

Subscription.defaultProps = {
    heading: subscription.heading,
    text: subscription.text,
};

export default Subscription;
