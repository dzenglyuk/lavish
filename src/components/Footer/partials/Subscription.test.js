import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";

import { subscription } from "../Data";
import Subscription from "./Subscription";

test("Renders correctly", () => {
    const { getByText } = render(<Subscription />);
    getByText(subscription.heading);
    getByText(subscription.text);
    getByText("Subscribe");
});

test("Matches the snapshot", () => {
    const tree = renderer.create(<Subscription />).toJSON();
    expect(tree).toMatchSnapshot();
});
