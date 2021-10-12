export const QUESTION_LIMIT = 5

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
    'numeric_range_maximum': ['Nizký', 'Střední', 'Optimální'],
    'numeric_range_optimum': ['Nizký', 'Optimální', 'Vysoký'],
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
    displayOptionsTitles,
    displayOptionValueLines,
    displayOptionColorShifts,
    QUESTION_LIMIT
}