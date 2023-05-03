import { types } from "./types"


export function addAction (a, b) {
    return {
        type: types.CALC,
        payload: Number(a) + Number(b)
    }
}

export function subAction (a, b) {
    return {
        type: types.CALC,
        payload: a - b
    }
}

export function multiAction (a, b) {
    return {
        type: types.CALC,
        payload: a * b
    }
}

export function divAction (a, b) {
    return {
        type: types.CALC,
        payload: a / b
    }
}