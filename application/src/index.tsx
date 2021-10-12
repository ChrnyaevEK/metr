import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function importBuildTarget() {
    if (process.env.REACT_APP_BUILD_TARGET === "admin_distribution") {
        return import("./admin_distribution/components/App/App");
    } else if (process.env.REACT_APP_BUILD_TARGET === "public_distribution") {
        return import("./public_distribution/components/App/App");
    } else {
        return Promise.reject(
            new Error("No such build target: " + process.env.REACT_APP_BUILD_TARGET)
        );
    }
}

// Import the entry point and render it's default export
importBuildTarget().then(({default: Environment}) =>
    ReactDOM.render(
        <React.StrictMode>
            <Environment/>
        </React.StrictMode>
        , document.getElementById("root")
    )
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
