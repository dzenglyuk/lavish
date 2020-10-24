import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import { StaticRouter as Router } from "react-router";
import userEvent from "@testing-library/user-event";

import Button from "./Main";

test("Renders correctly", () => {
    const { getByText } = render(
        <Button> Test Button </Button>
    );

    getByText("Test Button");
    expect(getByText("Test Button").className).toMatch(/btn--medium/);
    expect(getByText("Test Button").className).toMatch(/btn--primary/);
});

test("Handles click", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
        <Button handleClick={handleClick}> Test Button </Button>
    );
    userEvent.click(getByText("Test Button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
});

test("Matches the snapshot", () => {
    const tree = renderer
        .create(
            <Button> Test Button </Button>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});