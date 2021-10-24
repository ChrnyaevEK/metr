import {BASE_WS_URL, RECONNECT_TIMEOUT} from "../share";

class WS {
    url: string | undefined
    connection: WebSocket | undefined
    onmessage: any

    open = (group: string, room: string, onMessage: (e: WSEvent) => void) => {
        this.onmessage = onMessage
        this.url = `${BASE_WS_URL}/ws/${group}/${room}/`
        this.reopen()
    }

    reopen = () => {
        if (!this.url) throw 'No URL specified'
        this.connection = new WebSocket(this.url)
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