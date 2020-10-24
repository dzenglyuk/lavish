import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import { StaticRouter as Router } from "react-router";

import PricingSection from "./Main";

test("Renders correctly", () => {
    const { getByText } = render(
        <Router>
            <PricingSection />
        </Router>
    );
    getByText("Pricing");
    getByText("Starter");
    getByText("Gold");
    getByText("Diamond");    
});

test("Matches the snapshot", () => {
    const tree = renderer
        .create(
            <Router>
                <PricingSection />
            </Router>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
