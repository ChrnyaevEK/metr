import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../index.css'
import AnswerPage from "../AnswerPage/AnswerPage";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {HomePage} from "../HomePage/HomePage";

function App() {
    return (
        <Router>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-6">
                        <Switch>
                            <Route path="/public/:roomId">
                                <AnswerPage/>
                            </Route>
                            <Route path="*">
                                <HomePage/>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
