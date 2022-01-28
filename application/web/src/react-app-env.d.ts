declare namespace NodeJS {
    interface ProcessEnv {
        readonly NODE_ENV: 'development' | 'production' | 'test';
        readonly PUBLIC_URL: string;
    }
}

declare module '*.avif' {
    const src: string;
    export default src;
}

declare module '*.bmp' {
    const src: string;
    export default src;
}

declare module '*.gif' {
    const src: string;
    export default src;
}

declare module '*.jpg' {
    const src: string;
    export default src;
}

declare module '*.jpeg' {
    const src: string;
    export default src;
}

declare module '*.png' {
    const src: string;
    export default src;
}

declare module '*.webp' {
    const src: string;
    export default src;
}

declare module '*.svg' {
    import * as React from 'react';

    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;

    const src: string;
    export default src;
}

declare module '*.module.css' {
    const classes: { readonly [key: string]: string };
    export default classes;
}

declare module '*.module.scss' {
    const classes: { readonly [key: string]: string };
    export default classes;
}

declare module '*.module.sass' {
    const classes: { readonly [key: string]: string };
    export default classes;
}

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
    mean_rate: number,
    mode_rate: number,
    median_rate: number,
}

interface QuestionPrototype {
    room?: string,
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
        default_value: number,
    }
}

interface WSEvent {
    type: string,
    detail?: any
}
