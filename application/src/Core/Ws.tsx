import share from "../share";

let connection: WebSocket = new WebSocket('')

const wsEventHandler = {
    onerror: () => {
        setTimeout(ws.reopen, share.RECONNECT_TIMEOUT)
    }
}

export const ws = {
    reopen: () => {
        connection = new WebSocket('')
        connection.onerror = wsEventHandler.onerror
    },
    close: () => {
        connection.close()
    },
    isConnecting: () => {
        return connection.CONNECTING === connection.readyState
    },
    isOpen: () => {
        return connection.OPEN === connection.readyState
    },
    isClosing: () => {
        return connection.CLOSING === connection.readyState
    },
    isClosed: () => {
        return connection.CLOSED === connection.readyState
    },
}

export default ws