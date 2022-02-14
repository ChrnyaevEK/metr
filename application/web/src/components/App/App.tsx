import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, Redirect
} from "react-router-dom";
import {Provider} from "react-redux";
import store from "../../core/store"

import ReviewPage from "../admin_distribution/ReviewPage/ReviewPage";
import CreatePage from "../admin_distribution/CreatePage/CreatePage";
import HomePage from "../HomePage/HomePage";
import Logger from "../admin_distribution/Utils/Logger/Logger";
import AnswerPage from "../public_distribution/AnswerPage/AnswerPage";
import ContactPage from "../ContactPage/ContactPage";
import ConflictPage from "../public_distribution/ConflictPage/ConflictPage";

function App() {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <Router>
                    <nav className="navbar">
                        <a className="navbar-brand" href="/">
                            <img src="/static/metrbot.png" height="50px" alt="Metrbot"/>
                        </a>
                    </nav>
                    <div className="container flex-grow-1" id="main-container">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-sm-10 col-md-8 col-lg-8">
                                <Logger/>
                                <Switch>
                                    <Route path="/public/:roomId" component={AnswerPage}/>
                                    <Route path="/admin/:roomId" component={ReviewPage}/>
                                    <Route path="/admin" component={CreatePage}/>
                                    <Route path="/home" component={HomePage}/>
                                    <Route path="/contact" component={ContactPage}/>
                                    <Route path="/conflict" component={ConflictPage}/>
                                    <Route path="*">
                                        <Redirect to="/home"/>
                                    </Route>
                                </Switch>
                            </div>
                        </div>
                    </div>
                    <div className="font-small d-flex justify-content-center px-3 py-1 position-relative">
                        <Link to="/">Domů</Link>
                        <Link to="/admin" className="mx-4">Nové hlasování</Link>
                        <Link to="/contact">Kontakt</Link>
                    </div>
                </Router>
            </Provider>
        </React.StrictMode>
    );
}

export default App;
