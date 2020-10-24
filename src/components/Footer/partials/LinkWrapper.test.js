import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import { StaticRouter as Router } from "react-router";

import { infoLinks, socialLinks } from "../Data";
import LinkWrapper from "./LinkWrapper";

test("Renders correctly", () => {
    const { getByText } = render(<Router><LinkWrapper linkObjects={infoLinks}/></Router>);
    const names = infoLinks[0].links.map(link => link.name);
    getByText(infoLinks[0].title);
    getByText(infoLinks[1].title);
    for (let name of names) {
        getByText(name);
    }
});

test("Matches the snapshot 1", () => {
    const tree = renderer.create(<Router><LinkWrapper linkObjects={infoLinks}/></Router>).toJSON();
    expect(tree).toMatchSnapshot();
});

test("Matches the snapshot 2", () => {
    const tree = renderer.create(<Router><LinkWrapper linkObjects={socialLinks}/></Router>).toJSON();
    expect(tree).toMatchSnapshot();
});
