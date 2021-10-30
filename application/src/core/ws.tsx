import {BASE_WS_URL, RECONNECT_TIMEOUT, sleep} from "../share";

class WS {
    url: string | undefined
    connection: WebSocket | undefined
    onmessage: any
    onopen: any

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
        if (!this.url) throw 'No URL specified'
        this.connection = new WebSocket(this.url)
        this.connection.onopen = this.onopen
        this.connection.onerror = this.onerror
        this.connection.onclose = this.onerror
        this.connection.onmessage = (msg) => {
            this.onmessage(JSON.parse(msg.data))
        }
    }

    close = () => {
        if (!this.connection) throw 'Not connected'
        this.connection.close()
    }

    onerror = () => {
        setTimeout(this.reopen, RECONNECT_TIMEOUT)
    }
}

export default WS