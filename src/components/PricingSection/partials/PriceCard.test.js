import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import { StaticRouter as Router } from "react-router";
import { starterAccount, goldAccount, diamondAccount } from "../Data";
import { FaFire } from "react-icons/fa";

import PriceCard from "./PriceCard";

test("Renders correctly", () => {
    const { getByText } = render(
        <Router>
            <PriceCard {...starterAccount} icon={<FaFire />}/>
        </Router>
    );
    getByText("Starter");
    getByText("$8.99");
    getByText("100 Transactions");
    getByText("2% Cash Back");
    getByText("$10,000 Limit");
    getByText("Choose Plan");
});

// test("Throws an error on required prop", () => {
//     const propObj = { features: starterAccount.features };
//     console.error = jest.fn();
//     const { getByText } = render(
//         <Router>
//             <PriceCard {...propObj} icon={<FaFire />}/>
//         </Router>
//     );
//     expect(console.error).toHaveBeenCalledTimes(1);
// });

test("Matches the snapshot 1", () => {
    const tree = renderer
        .create(
            <Router>
                <PriceCard {...starterAccount} icon={<FaFire />}/>
            </Router>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test("Matches the snapshot 2", () => {
    const tree = renderer
        .create(
            <Router>
                <PriceCard {...goldAccount} icon={<FaFire />}/>
            </Router>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test("Matches the snapshot 3", () => {
    const tree = renderer
        .create(
            <Router>
                <PriceCard {...diamondAccount} icon={<FaFire />}/>
            </Router>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
