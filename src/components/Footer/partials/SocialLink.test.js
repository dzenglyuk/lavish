import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import { StaticRouter as Router } from "react-router";
import { FaFacebook } from "react-icons/fa";
import SocialLink from "./SocialLink";

const link = { name: "Facebook", icon: <FaFacebook /> };

test("Renders correctly", () => {
    const { getByLabelText } = render(
        <Router>
            <SocialLink aria={link.name} key={link.name}>
                {link.icon}
            </SocialLink>
        </Router>
    );
    getByLabelText(link.name);
});

test("Matches the snapshot", () => {
    const tree = renderer
        .create(
            <Router>
                <SocialLink aria={link.name} key={link.name}>
                    {link.icon}
                </SocialLink>
            </Router>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
