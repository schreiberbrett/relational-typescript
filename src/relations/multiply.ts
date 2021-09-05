import { relation3 } from "../Relation"
import { singleton3, empty3, uncountablyInfinite } from "../Result"

export const multiply = relation3<number, number, number>(
    (a, b, out) => a * b === out
        ? singleton3(a, b, out)
        : empty3(),

    (a, b) => singleton3(a, b, a * b),

    (a, out) => {
        if (a === 0 && out === 0)
            return uncountablyInfinite()
        else if (a === 0 && out !== 0)
            return empty3()
        else
            return singleton3(a, out / a, out)
    },

    (_a) => uncountablyInfinite(),

    (b, out) => {
        if (b === 0 && out === 0)
            return uncountablyInfinite()
        else if (b === 0 && out !== 0)
            return empty3()
        else
            return singleton3(out / b, b, out)
    },

    (_b) => uncountablyInfinite(),

    (_c) => uncountablyInfinite(),

    () => uncountablyInfinite()
)
