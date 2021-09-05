import { Relation2 } from "./Relation"

export interface NotEnoughKnowns {
    kind: 'Not Enough Knowns'
}

export interface UncountablyInfinite {
    kind: 'Uncountably Infinite'
}

export type Result1<A> = UncountablyInfinite | NotEnoughKnowns | {
    kind: 'Iterable1',
    iterable: Iterable<A>
}

export type Result2<A, B> = UncountablyInfinite | NotEnoughKnowns | {
    kind: 'Iterable2',
    iterable: Iterable<[A, B]>
}

export type Result3<A, B, C> = UncountablyInfinite | NotEnoughKnowns | {
    kind: 'Iterable3',
    iterable: Iterable<[A, B, C]>
}

export function singleton1<A>(a: A): Result1<A> {
    return fromArray1([a])
}

export function singleton2<A, B>(a: A, b: B): Result2<A, B> {
    return fromArray2([[a, b]])
}

export function singleton3<A, B, C>(a: A, b: B, c: C): Result3<A, B, C> {
    return fromArray3([[a, b, c]])
}

export function fromArray1<A>(array: A[]): Result1<A> {
    return {
        kind: 'Iterable1',
        iterable: array
    }
}

export function fromArray2<A, B>(array: [A, B][]): Result2<A, B> {
    return {
        kind: 'Iterable2',
        iterable: array
    }
}

export function fromArray3<A, B, C>(array: [A, B, C][]): Result3<A, B, C> {
    return {
        kind: 'Iterable3',
        iterable: array
    }
}

export function empty1<A>(): Result1<A> {
    return fromArray1([])
}

export function empty2<A, B>(): Result2<A, B> {
    return fromArray2([])
}

export function empty3<A, B, C>(): Result3<A, B, C> {
    return fromArray3([])
}

export function notEnoughKnowns(): NotEnoughKnowns {
    return { kind: 'Not Enough Knowns' }
}

export function uncountablyInfinite(): UncountablyInfinite {
    return { kind: 'Uncountably Infinite' }
}

export function f<A, B, C>(g: (a: A, b: B) => C, a: A, b: B): Result3<A, B, C>
export function f<A, B, C>(g: (a: A, b: B) => C, a: A, b: B, c: C): Result3<A, B, C>
export function f<A, B, C>(g: (a: A, b: B) => C, a: A, b: B, c?: C): Result3<A, B, C> {
    if (c === undefined) {

    }

    return singleton3(a, b, g(a, b))
}













export function relation2<A, B>(
    f1: (a: A, b: B) => Result2<A, B>,
    f2: (a: A) => Result2<A, B>,
    f3: (b: B) => Result2<A, B>,
    f4: () => Result2<A, B>
): Relation2<A, B> {
    return (a, b) => {
        if (a.kind === 'Known' && b.kind === 'Known') {
            return f1(a.value, b.value)
        } else if (a.kind === 'Known' && b.kind === 'Unknown') {
            return f2(a.value)
        } else if (a.kind === 'Unknown' && b.kind === 'Known') {
            return f3(b.value)
        } else /* if (a.kind === 'Unknown' && b.kind === 'Unknown') */ {
            return f4()
        }
    }
}