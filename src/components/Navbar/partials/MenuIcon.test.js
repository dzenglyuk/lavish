import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";

import MenuIcon from "./MenuIcon";

test("Renders correctly", () => {
    const { getByTestId } = render(<MenuIcon />);

    getByTestId("bars-icon");
});

test("Handles click", () => {
    let clicked = false;
    const handleClick = jest.fn(() => (clicked = !clicked));

    const { getByTestId } = render(
        <MenuIcon clicked={clicked} handleClick={handleClick} />
    );

    getByTestId("bars-icon");

    userEvent.click(getByTestId("menu-icon"));
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(clicked).toBe(true);
});

test("Matches the snapshot 1", () => {
    const tree = renderer.create(<MenuIcon />).toJSON();
    expect(tree).toMatchSnapshot();
});

test("Matches the snapshot 2", () => {
    const tree = renderer.create(<MenuIcon clicked={true} />).toJSON();
    expect(tree).toMatchSnapshot();
});
