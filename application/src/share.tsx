export const QUESTION_LIMIT = 5

// TODO - unite option structures

export const displayOptions: string[] = ['numeric_range_optimum', 'numeric_range_maximum']

interface IDisplayOptionsTitles {
    [key: string]: string
}

export const displayOptionsTitles: IDisplayOptionsTitles = {
    'numeric_range_optimum': 'Optimum',
    'numeric_range_maximum': 'Maximum'
}

interface IDisplayOptionValues {
    [key: string]: string[]
}

export const displayOptionValueLines: IDisplayOptionValues = {
    'numeric_range_maximum': ['Nizké', 'Střední', 'Maximální'],
    'numeric_range_optimum': ['Nizké', 'Optimální', 'Vysoké'],
}
type colorShifter = (value: number) => string

interface IDisplayOptionColorShifters {
    [key: string]: colorShifter
}

export const displayOptionColorShifts: IDisplayOptionColorShifters = {
    'numeric_range_maximum': (value: number) => 'hue-rotate(-' + value + 'deg)',
    'numeric_range_optimum': (value: number) => 'hue-rotate(-' + 2 * value + 'deg)',
}

export default {
    displayOptions,
    displayOptionsTitles,
    displayOptionValueLines,
    displayOptionColorShifts,
    QUESTION_LIMIT
}