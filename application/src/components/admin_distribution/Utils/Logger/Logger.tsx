import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../../../core/store";

function Logger() {
    const http_error = useSelector((state: RootState) => state.logManager.http_error)
    const ws_error = useSelector((state: RootState) => state.logManager.ws_error)
    const warning = useSelector((state: RootState) => state.logManager.warning)
    if (http_error || ws_error) {
        return <div className="alert fixed-top alert-danger" role="alert">{http_error?.detail || ws_error?.detail}</div>
    } else if (warning) {
        return <div className="alert fixed-top alert-warning" role="alert">{warning}</div>
    } else {
        return null
    }
}

export default Logger