import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import { StaticRouter as Router } from "react-router";

import { homeObjFour } from "../Data";
import ServicesPage from "./Main";

test("Renders correctly", () => {
    const { getByText } = render(
        <Router>
            <ServicesPage />
        </Router>
    );
    getByText(homeObjFour.headLine);
    getByText(homeObjFour.topLine);
    getByText("Pricing");
    getByText("Starter");
    getByText("Gold");
    getByText("Diamond");  
});

test("Matches the snapshot", () => {
    const tree = renderer
        .create(
            <Router>
                <ServicesPage />
            </Router>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
