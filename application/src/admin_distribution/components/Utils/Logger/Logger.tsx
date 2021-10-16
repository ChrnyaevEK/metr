import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../../../core/store";

function Logger() {
    const error = useSelector((state: RootState) => state.logManager.error)

    return (
        error ? <div className="alert alert-danger fixed-top" role="alert">{error?.detail}</div> : null
    )
}

export default Logger