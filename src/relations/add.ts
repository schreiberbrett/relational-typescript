import { relation3 } from "../Relation"
import { empty3, uncountablyInfinite, singleton3 } from "../Result"

export const add = relation3<number, number, number>(
    (a, b, out) => a + b === out
        ? singleton3(a, b, out)
        : empty3(),

    (a, b) => singleton3(a, b, a + b),

    (a, out) => singleton3(a, out - a, out),

    (_a) => uncountablyInfinite(),

    (b, out) => singleton3(out - b, b, out),

    (_b) => uncountablyInfinite(),

    (_c) => uncountablyInfinite(),

    () => uncountablyInfinite()
)
