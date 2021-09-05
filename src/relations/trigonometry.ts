import { relation2 } from "../Relation"

export const sine = relation2<number, number>(
    (angle, height) => null,
    (angle) => null,
    (height) => null,
    () => null
)

export const cosine = relation2<number, number>(
    (angle, width) => null,
    (angle) => null,
    (width) => null,
    () => null
)

export const tangent = relation2<number, number>(
    (angle, ratio) => null,
    (angle) => null,
    (ratio) => null,
    () => null
)

export const cotangent = relation2<number, number>(
    (angle, out) => null,
    (angle) => null,
    (out) => null,
    () => null
)

export const secant = relation2<number, number>(
    (angle, out) => null,
    (angle) => null,
    (out) => null,
    () => null
)


export const cosecant = relation2<number, number>(
    (angle, out) => null,
    (angle) => null,
    (out) => null,
    () => null
)
