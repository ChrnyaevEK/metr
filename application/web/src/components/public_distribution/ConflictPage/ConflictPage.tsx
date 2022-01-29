import React from "react";
import {useLocation} from "react-router";
import {useHistory} from "react-router-dom";

export function ConflictPage() {
    const location = useLocation<WSEvent>();

    const history = useHistory()

    if (!location.state) {
        history.push('/home')
    }
    return (
        <div className="alert alert-warning" role="alert">{location.state?.detail}</div>
    )
}

export default ConflictPage