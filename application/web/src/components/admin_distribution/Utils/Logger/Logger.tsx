import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../../../core/store";

function Logger() {
    const http_error = useSelector((state: RootState) => state.logManager.http_error)
    const ws_error = useSelector((state: RootState) => state.logManager.ws_error)
    return (
        (http_error || ws_error) ? <div className="alert alert-danger fixed-top" role="alert">{
            http_error?.detail || ws_error?.detail
        }</div> : null
    )
}

export default Logger