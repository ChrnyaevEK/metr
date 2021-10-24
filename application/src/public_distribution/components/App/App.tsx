import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../index.css'
import AnswerPage from "../AnswerPage/AnswerPage";
import {
    BrowserRouter as Router,
    Switch,
    Route, Link,
} from "react-router-dom";
import {HomePage} from "../HomePage/HomePage";
import {Provider} from "react-redux";
import store from "../../../core/store";

function App() {
    return (
        <Router>
            <Provider store={store}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
                            <Switch>
                                <Route path="/public/:roomId" component={AnswerPage}/>
                                <Route path="*" component={HomePage}/>
                            </Switch>
                            <div className="font-small fixed-bottom d-flex justify-content-center px-3 py-1">
                                <Link to="/" className="mr-5">Domů</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Provider>
        </Router>
    );
}

export default App;
