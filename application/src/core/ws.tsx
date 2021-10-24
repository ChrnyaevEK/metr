import share from "../share";

class WS {
    url: string
    connection: WebSocket

    constructor(group: string) {
        this.url = `ws://${window.location.host}/ws/${group}/`
        this.connection = new WebSocket(this.url)
        this.connection.onerror = this.onerror
    }

    reopen() {
        this.connection = new WebSocket(this.url)
        this.connection.onerror = this.onerror
    }

    close() {
        this.connection.close()
    }

    isConnecting() {
        return this.connection.CONNECTING === this.connection.readyState
    }

    isOpen() {
        return this.connection.OPEN === this.connection.readyState
    }

    isClosing() {
        return this.connection.CLOSING === this.connection.readyState
    }

    isClosed() {
        return this.connection.CLOSED === this.connection.readyState
    }

    onerror() {
        setTimeout(this.reopen, share.RECONNECT_TIMEOUT)
    }
}

export default WS