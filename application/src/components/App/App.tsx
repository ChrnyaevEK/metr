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
import {HomePage} from "../HomePage/HomePage";
import Logger from "../admin_distribution/Utils/Logger/Logger";
import AnswerPage from "../public_distribution/AnswerPage/AnswerPage";


function App() {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <Router>
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-sm-10 col-md-8 col-lg-6">
                                <Logger/>
                                <Switch>
                                    <Route path="/public/:roomId" component={AnswerPage}/>
                                    <Route path="/admin/:roomId" component={ReviewPage}/>
                                    <Route path="/admin" component={CreatePage}/>
                                    <Route path="/home" component={HomePage}/>
                                    <Route path="*">
                                        <Redirect to="/home"/>
                                    </Route>
                                </Switch>
                                <div className="font-small fixed-bottom d-flex justify-content-center px-3 py-1">
                                    <Link to="/" className="mr-4">Domů</Link>
                                    <Link to="/admin">Nová přednáška</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Router>
            </Provider>
        </React.StrictMode>
    );
}

export default App;