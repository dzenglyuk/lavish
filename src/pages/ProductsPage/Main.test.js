import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import { StaticRouter as Router } from "react-router";

import { homeObjTwo, homeObjThree } from "../Data";
import ProductsPage from "./Main";

test("Renders correctly", () => {
    const { getByText } = render(
        <Router>
            <ProductsPage />
        </Router>
    );
    getByText(homeObjTwo.headLine);
    getByText(homeObjTwo.topLine);
    getByText(homeObjThree.headLine);
    getByText(homeObjThree.topLine);
});

test("Matches the snapshot", () => {
    const tree = renderer
        .create(
            <Router>
                <ProductsPage />
            </Router>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
