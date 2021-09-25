import React, { lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = lazy(
  () => import("../pages/Home")
);
const Image = lazy(
  () => import("../pages/Image")
);

const pages = [
  {
    pageLink: "/home",
    view: Home
  },
  {
    pageLink: "/image",
    view: Image
  },
];

const Routes: React.FC<any> = (props) => {

    return (
        <>
            <Navbar />
            <Switch>
                {pages.map((page, index) => (
                    <Route
                        exact
                        path={page.pageLink}
                        render={() => <page.view />}
                        key={index}
                    />
                ))}
                <Redirect to="/home" />
            </Switch>
        </>
    );
};

export default Routes;