/// <reference types="react-scripts" />
interface RoomType {
    id: string,
    time_created: string,
    time_updated: string,
    use_color: boolean
    online_counter: number,
    is_online: boolean,
}

interface RoomPrototype {
    use_color?: boolean
}

interface QuestionType {
    id: string,
    time_created: string,
    room: string,
    value: string,
    display_option: string,
    rate: number,
}

interface QuestionPrototype {
    room: string,
    value: string,
    display_option: string,
}

interface AnswerType {
    id: string,
    time_created: string,
    client: string,
    question: string,
    type: string,
}

interface AnswerPrototype {
    client: string,
    question: string,
}

interface NumericAnswer extends AnswerType {
    value: number
}

interface NumericAnswerPrototype extends AnswerPrototype {
    value: number
}

interface ClientType {
    id: string,
    room: string,
}

interface ClientPrototype {
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

interface WSEvent {
    type: string,
    message?: any
}