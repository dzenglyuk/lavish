import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import { StaticRouter as Router } from "react-router";

import NavItem from "./NavItem";

test("Renders correctly", () => {
    const { getByText, getByTestId } = render(
        <Router>
            <NavItem />
        </Router>
    );

    getByText("Home");
    expect(getByTestId("nav-item-link")).toHaveProperty(
        "href",
        "http://localhost/"
    );
});

test("Render correctly with props", () => {
    const { getByText, getByTestId } = render(
        <Router>
            <NavItem title={"Test Title"} path={"/somepath"} />
        </Router>
    );

    getByText("Test Title");
    expect(getByTestId("nav-item-link")).toHaveProperty(
        "href",
        "http://localhost/somepath"
    );
});

test("Matches the snapshot 1", () => {
    const tree = renderer
        .create(
            <Router>
                <NavItem />
            </Router>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test("Matches the snapshot 2", () => {
    const tree = renderer
        .create(
            <Router>
                <NavItem title="Services" path="/services" />
            </Router>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
