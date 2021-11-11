export const QUESTION_LIMIT = 5  // Limit of questions
export const RECONNECT_TIMEOUT = 5000  // Timeout for reconnection to server
export const RECONNECT_MAX_TRY = 20 // Reconnection max try
export const SEARCH_VALIDATION_TIMEOUT = 1000  // Timeout when looking for room
export const ANSWER_SAVE_TIMEOUT = 1000  // Timeout for saving students answers
export const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : `https://${window.location.host}`
export const BASE_API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:8000/api' : `https://${window.location.host}/api`
export const BASE_WS_URL = process.env.NODE_ENV === 'development' ? 'ws://localhost:8000' : `wss://${window.location.host}`
export const DEFAULT_DISPLAY_OPTION = 'numeric_range_optimum'

export const displayOptions: IDisplayOptions = {
    numeric_range_optimum: {
        title: 'Optimální',
        text_equivalents: ['Nizké', 'Optimální', 'Vysoké'],
        color_shifter: (value: number) => 'hue-rotate(-' + 2 * value + 'deg)',
        default_value: 50,
    },
    numeric_range_maximum: {
        title: 'Maximální',
        text_equivalents: ['Nizké', 'Střední', 'Maximální'],
        color_shifter: (value: number) => 'hue-rotate(-' + value + 'deg)',
        default_value: 100,
    }
}

export const sleep = (milliseconds: number) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

export function getCookie(name: string) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

export default {
    displayOptions,
    QUESTION_LIMIT,
    RECONNECT_TIMEOUT,
    BASE_API_URL,
    BASE_WS_URL,
    SEARCH_VALIDATION_TIMEOUT,
    sleep,
    getCookie
}