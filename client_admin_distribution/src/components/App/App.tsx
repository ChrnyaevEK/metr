import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import ReviewPage from "../ReviewPage/CreatePage";
import CreatePage from "../CreatePage/CreatePage";

function App() {
    return (
        <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-sm-10 col-md-8 col-lg-6">
                    <CreatePage/>
                </div>
            </div>
        </div>
    );
}

export default App;
