import { relation2Named } from "../Relation"

// TODO one together

export const sine = relation2Named<number, number>(
    (angle, height) => null,
    (angle, HEIGHT) => null,
    (ANGLE, height) => null,
    (ANGLE, HEIGHT) => null
)

export const cosine = relation2Named<number, number>(
    (angle, width) => null,
    (angle, WIDTH) => null,
    (ANGLE, width) => null,
    (ANGLE, WIDTH) => null
)

export const tangent = relation2Named<number, number>(
    (angle, ratio) => null,
    (angle, RATIO) => null,
    (ANGLE, ratio) => null,
    (ANGLE, RATIO) => null
)

export const cotangent = relation2Named<number, number>(
    (angle, out) => null,
    (angle, OUT) => null,
    (ANGLE, out) => null,
    (ANGLE, OUT) => null
)

export const secant = relation2Named<number, number>(
    (angle, out) => null,
    (angle, OUT) => null,
    (ANGLE, out) => null,
    (ANGLE, OUT) => null
)


export const cosecant = relation2Named<number, number>(
    (angle, out) => null,
    (angle, OUT) => null,
    (ANGLE, out) => null,
    (ANGLE, OUT) => null
)
