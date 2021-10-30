export const QUESTION_LIMIT = 5  // Limit of questions
export const RECONNECT_TIMEOUT = 2000  // Timeout for reconnection to server
export const SEARCH_VALIDATION_TIMEOUT = 1000  // Timeout when looking for room
export const ANSWER_SAVE_TIMEOUT = 1000  // Timeout for saving students answers
export const BASE_API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:8000/api' : `https://${window.location.host}/api`
export const BASE_WS_URL = process.env.NODE_ENV === 'development' ? 'ws://localhost:8000' : `wss://${window.location.host}`
export const DEFAULT_DISPLAY_OPTION = 'numeric_range_optimum'

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

export const sleep = (milliseconds: number) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

export default {
    displayOptions,
    QUESTION_LIMIT,
    RECONNECT_TIMEOUT,
    BASE_API_URL,
    BASE_WS_URL,
    SEARCH_VALIDATION_TIMEOUT,
    sleep
}