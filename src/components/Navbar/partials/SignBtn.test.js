import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import { StaticRouter as Router } from "react-router";
import userEvent from "@testing-library/user-event";

import SignBtn from "./SignBtn";

test("Renders correctly", () => {
    const { getByTestId, getByText } = render(
        <Router>
            <SignBtn />
        </Router>
    );

    getByTestId("sign-btn");
    getByText("SIGN UP");
    expect(getByText("SIGN UP").className).toMatch(/btn--mobile/);
    expect(getByTestId("sign-btn")).toHaveProperty(
        "href",
        "http://localhost/sign-up"
    );
});

test("Handles click", () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
        <Router>
            <SignBtn handleClick={handleClick}/>
        </Router>
    );
    userEvent.click(getByTestId("sign-btn").parentNode);
    expect(handleClick).toHaveBeenCalledTimes(1);
});

test("Matches the snapshot 1", () => {
    const tree = renderer
        .create(
            <Router>
                <SignBtn />
            </Router>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test("Matches the snapshot 2", () => {
    const tree = renderer
        .create(
            <Router>
                <SignBtn button={true} />
            </Router>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
