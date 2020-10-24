import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import { StaticRouter as Router } from "react-router";

import {
    homeObjOne,
    homeObjTwo,
    homeObjThree,
    homeObjFour,
} from "../Data";
import HomePage from "./Main";

test("Renders correctly", () => {
    const { getByText } = render(
        <Router>
            <HomePage />
        </Router>
    );
    getByText(homeObjOne.headLine);
    getByText(homeObjOne.topLine);
    getByText(homeObjTwo.headLine);
    getByText(homeObjTwo.topLine);
    getByText(homeObjThree.headLine);
    getByText(homeObjThree.topLine);
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
                <HomePage />
            </Router>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
