import { relation2Named, relation3Named } from "../Relation"
import { singleton3, empty3, uncountablyInfinite, fromArray3, singleton2, empty2, fromArray2 } from "../Result"

export const add = relation3Named<number, number, number>(
    (a, b, out) => a + b === out
        ? singleton3(a, b, out)
        : empty3(),

    (a, b, OUT) => singleton3(a, b, a + b),

    (a, B, out) => singleton3(a, out - a, out),

    (a, B, OUT) => B === OUT && a !== 0
        ? empty3()
        : uncountablyInfinite(),

    (A, b, out) => singleton3(out - b, b, out),

    (A, b, OUT) => A === OUT && b !== 0
        ? empty3()
        : uncountablyInfinite(),

    (A, B, out) => A === B
        ? singleton3(out / 2, out / 2, out)
        : uncountablyInfinite(),

    (A, B, OUT) => A === B && A === OUT
        ? singleton3(0, 0, 0)
        : uncountablyInfinite()
)


export const multiply = relation3Named<number, number, number>(
    (a, b, out) => a * b === out
        ? singleton3(a, b, out)
        : empty3(),

    (a, b, OUT) => singleton3(a, b, a * b),

    (a, B, out) => {
        if (a !== 0) return singleton3(a, out / a, out)
        
        if (out === 0) return uncountablyInfinite()
        
        return empty3()
    },

    (a, B, OUT) => {
        if (B !== OUT) return uncountablyInfinite()

        if (a === 1) return uncountablyInfinite()

        return singleton3(a, 0, 0)
    },

    (A, b, out) => {
        if (b !== 0) return singleton3(out / b, b, out)
        
        if (out === 0) return uncountablyInfinite()
        
        return empty3()
    },

    (A, b, OUT) => {
        if (A !== OUT) return uncountablyInfinite()

        if (b === 1) return uncountablyInfinite()

        return singleton3(0, b, 0)
    },

    (A, B, out) => {
        if (A === B) { // X * X === Y
            return out >= 0
                ? singleton3(Math.sqrt(out), Math.sqrt(out), out)
                : empty3()
        }

        return uncountablyInfinite()
    },

    (A, B, OUT) => A === B && A === OUT // X * X === X
        ? fromArray3([
            [0, 0, 0], //  0 * 0 === 0
            [1, 1, 1]]) // 1 * 1 === 1
        : uncountablyInfinite()
)

export const square = relation2Named<number, number>(
    undefined // TODO together
)