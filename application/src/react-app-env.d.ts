/// <reference types="react-scripts" />
interface QuestionType {
    display_option: string,
}

interface TextualQuestion extends QuestionType {
    value: string,
}

interface NumericQuestion extends QuestionType {
    value: number,
}