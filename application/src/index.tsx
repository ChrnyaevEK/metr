import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./components/App/App";

function importBuildTarget() {
    if (process.env.REACT_APP_BUILD_TARGET === "admin_distribution") {
        return import("./components/App/App");

    }
}

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
    , document.getElementById("root")
)
