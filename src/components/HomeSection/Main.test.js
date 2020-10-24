import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import { StaticRouter as Router } from "react-router";

import {
    homeObjOne,
    homeObjTwo,
    homeObjThree,
    homeObjFour,
} from "../../pages/Data";
import HomeSection from "./Main";

test("Renders correctly", () => {
    const { getByText, getByAltText } = render(
        <Router>
            <HomeSection {...homeObjOne} />
        </Router>
    );
    getByText(homeObjOne.headLine);
    getByText(homeObjOne.topLine);
    getByText(homeObjOne.description);
    getByText(homeObjOne.buttonLabel);
    getByAltText(homeObjOne.alt);
});

test("Matches the snapshot 1", () => {
    const tree = renderer
        .create(
            <Router>
                <HomeSection {...homeObjOne} />
            </Router>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test("Matches the snapshot 2", () => {
    const tree = renderer
        .create(
            <Router>
                <HomeSection {...homeObjTwo} />
            </Router>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test("Matches the snapshot 3", () => {
    const tree = renderer
        .create(
            <Router>
                <HomeSection {...homeObjThree} />
            </Router>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test("Matches the snapshot 4", () => {
    const tree = renderer
        .create(
            <Router>
                <HomeSection {...homeObjFour} />
            </Router>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
