import {BASE_WS_URL, RECONNECT_MAX_TRY, RECONNECT_TIMEOUT} from "../share";
import store from "./store";

class WS {
    url: string | undefined
    connection: WebSocket | undefined
    onmessage: any
    onopen: any
    reconnectTimeoutId: any
    reconnectTry = 0

    send = (event: WSEvent) => {
        this.connection?.send(JSON.stringify(event))
    }

    open = (group: string, room: string, onMessage: (e: WSEvent) => void, onOpen: () => void) => {
        this.onmessage = onMessage
        this.onopen = onOpen
        this.url = `${BASE_WS_URL}/ws/${group}/${room}/`
        this.reopen()
    }

    reopen = () => {
        this.reconnectTimeoutId = null
        store.dispatch({
            type: 'logger/unset_ws_error',
            payload: null,
        })
        if (!this.url) throw new Error('No URL specified')
        this.connection = new WebSocket(this.url)
        this.connection.onopen = () => {
            this.reconnectTry = 0
            this.onopen()
        }
        this.connection.onerror = this.onerror
        this.connection.onclose = this.onclose
        this.connection.onmessage = (msg) => {
            this.onmessage(JSON.parse(msg.data))
        }
    }

    close = () => {
        if (!this.connection) throw new Error('Not connected')
        this.connection.close()
    }

    onerror = () => {
        store.dispatch({
            type: 'logger/set_ws_error',
            payload: {
                detail: 'Communication with server failed',
                status: 500,
                protocol: 'ws',
                timestamp: Date.now()
            },
        })
    }
    onclose = () => {
        store.dispatch({
            type: 'logger/set_ws_error',
            payload: {
                detail: 'Failed co connect to server',
                status: 500,
                protocol: 'ws',
                timestamp: Date.now()
            },
        })
        if (!this.reconnectTimeoutId && this.reconnectTry <= RECONNECT_MAX_TRY) {
            this.reconnectTry += 1
            this.reconnectTimeoutId = setTimeout(this.reopen, RECONNECT_TIMEOUT)
        }
    }
}

export default WS