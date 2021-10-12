export const QUESTION_LIMIT = 5

interface IDisplayOptions {
    [key: string]: string
}

export const displayOptions: IDisplayOptions = {
    'numeric_range_optimum': 'Optimum',
    'numeric_range_maximum': 'Maximum'
}

export default {
    displayOptions,
    QUESTION_LIMIT
}