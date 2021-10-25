export const QUESTION_LIMIT = 5  // Limit of questions
export const RECONNECT_TIMEOUT = 2000  // Timeout for reconnection to server
export const SEARCH_VALIDATION_TIMEOUT = 1000  // Timeout when looking for room
export const BASE_HTTP_URL = 'http://localhost:8000'
export const BASE_WS_URL = 'ws://localhost:8000'

export const displayOptions: IDisplayOptions = {
    numeric_range_optimum: {
        title: 'Optimum',
        text_equivalents: ['Nizké', 'Optimální', 'Vysoké'],
        color_shifter: (value: number) => 'hue-rotate(-' + 2 * value + 'deg)'
    },
    numeric_range_maximum: {
        title: 'Maximum',
        text_equivalents: ['Nizké', 'Střední', 'Maximální'],
        color_shifter: (value: number) => 'hue-rotate(-' + value + 'deg)'
    }
}

export default {
    displayOptions,
    QUESTION_LIMIT,
    RECONNECT_TIMEOUT,
    BASE_HTTP_URL,
    BASE_WS_URL,
    SEARCH_VALIDATION_TIMEOUT
}