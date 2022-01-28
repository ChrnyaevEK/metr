import {viewSet} from "../viewSet";

export const createAnswer = async (data: NumericAnswerPrototype, type: string) => {
    return await viewSet.create(type, data)
}
