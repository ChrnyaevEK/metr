/// <reference types="react-scripts" />
interface RoomType {
    id?: string,
    time_created?: string,
    time_updated?: string,
    use_color?: boolean
}

interface QuestionType {
    id?: string,
    time_created?: string,
    room: string,
    value: string,
    display_option: string,
}

interface AnswerType {
    id?: string,
    time_created?: string,
    client: string,
    question: string,
    type: string,
}

interface NumericAnswer extends AnswerType {
    value: number
}

interface ClientType {
    id?: string,
    room: string,
}

interface ErrorType {
    detail: string,
    status: number,
    protocol: string['http' | 'ws'],
    timestamp: Date
}

interface IDisplayOptions {
    [key: string]: {
        title: string,
        text_equivalents: string[],
        color_shifter: (value: number) => string,
    }
}