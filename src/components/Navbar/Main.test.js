import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import { StaticRouter as Router } from "react-router";
import { renderHook, act } from "@testing-library/react-hooks";

import NavBar from "./Main";

test("Renders correctly", () => {
    const { getByTestId, getAllByTestId } = render(
        <Router>
            <NavBar />
        </Router>
    );

    getByTestId("logo-icon");
    getByTestId("bars-icon");
    getByTestId("sign-btn");
    getAllByTestId("nav-item-link");
});

// // test("Processes click correctly", () => {
// //     const { result } = renderHook(() => NavBar());

// //     expect(result.current.clicked).toBe(false);
// //     expect(typeof result.current.handleClick).toBe("function");

// //     act(() => {
// //         result.current.handleClick();
// //     });

// //     expect(result.current.clicked).toBe(true);

// //     act(() => {
// //         result.current.closeMobileMenu();
// //     });

// //     expect(result.current.clicked).toBe(false);
// // });

// test("Processes resize correctly", () => {
//     const { result } = renderHook(() => NavBar());
//     expect(result.current.button).toBe(true);

//     expect(typeof result.current.closeMobileMenu).toBe("function");
//     expect(typeof result.current.showButton).toBe("function");

//     global.innerWidth = 500;
//     global.dispatchEvent(new Event("resize"));

//     expect(result.current.button).toBe(false);
// });

test("Matches the snapshot", () => {
    const tree = renderer
        .create(
            <Router>
                <NavBar />
            </Router>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});