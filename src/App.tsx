import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, RouteComponentProps } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux";

import "./App.scss";

const Routes = lazy(() => import("./routes"));

const App: React.FC = () => {
    return (
        <Suspense
            fallback={<span>Loading...</span>}
        >
            <Provider store={store}>
                <BrowserRouter>
                    <Route
                        path="/"
                        render={(props: RouteComponentProps) => (
                            <Routes {...props} />
                        )}
                    />
                </BrowserRouter>
            </Provider>
        </Suspense>
    );
};

export default App;