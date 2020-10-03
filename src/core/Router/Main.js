import React, { useMemo } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../../components/Navbar/Main";
import Footer from "../../components/Footer/Main";

import pages from "../paths/index";

const Main = ({ Navbar, pages }) => {
    const thisPages = useMemo(() => pages || [], [pages]);
    return (
        <Router>
            <Navbar pages={thisPages} />
            <Switch>
                {thisPages.map((page, index) => (
                    <Route key={index} exact {...page} />
                ))}
            </Switch>
            <Footer />
        </Router>
    );
};

Main.defaultProps = {
    Navbar,
    pages,
};

export default React.memo(Main);
