import React from "react";
import { StaticRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";

import Logo from "./Main";

test("Renders correctly", () => {
    const { getByText, getByTestId } = render(
        <Router>
            <Logo />
        </Router>
    );

    getByText("LAVISH");
    getByTestId("logo-icon");
    expect(getByText("LAVISH")).toHaveProperty("href", "http://localhost/");
    expect(getByText("LAVISH")).toHaveProperty("className", "navbar-logo");
});

test("Handles click", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
        <Router>
            <Logo className="social-logo" handleClick={handleClick} />
        </Router>
    );

    userEvent.click(getByText("LAVISH"));
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(getByText("LAVISH")).toHaveProperty("className", "social-logo");
});

test("Matches the snapshot 1", () => {
    const tree = renderer
        .create(
            <Router>
                <Logo />
            </Router>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test("Matches the snapshot 2", () => {
    const tree = renderer
        .create(
            <Router>
                <Logo className="social-logo" handleClick={() => true} />
            </Router>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
