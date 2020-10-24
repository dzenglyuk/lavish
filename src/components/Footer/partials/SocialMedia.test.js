import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import { StaticRouter as Router } from "react-router";

import SocialMedia from "./SocialMedia";

test("Renders correctly", () => {
    const { getByText, getByLabelText } = render(<Router><SocialMedia /></Router>);
    getByText("LAVISH © 2020");
    getByLabelText("Facebook");
    getByLabelText("Instagram");
    getByLabelText("Youtube");
});

test("Matches the snapshot", () => {
    const tree = renderer.create(<Router><SocialMedia /></Router>).toJSON();
    expect(tree).toMatchSnapshot();
});
