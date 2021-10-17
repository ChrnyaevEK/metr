import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, Redirect
} from "react-router-dom";
import {Provider} from "react-redux";
import store from "../../../core/store"

import ReviewPage from "../ReviewPage/ReviewPage";
import CreatePage from "../CreatePage/CreatePage";
import {HomePage} from "../HomePage/HomePage";
import Logger from "../Utils/Logger/Logger";


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
                                    <Route path="/admin/:roomId">
                                        <ReviewPage/>
                                    </Route>
                                    <Route path="/admin">
                                        <CreatePage/>
                                    </Route>
                                    <Route path="/home">
                                        <HomePage/>
                                    </Route>
                                    <Route path="*">
                                        <Redirect to="/home"/>
                                    </Route>
                                </Switch>
                                <div className="font-small fixed-bottom d-flex justify-content-center px-3 py-1">
                                    <Link to="/" className="mr-5">Domů</Link>
                                    <Link to="/admin/">Nový dotazník</Link>
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
