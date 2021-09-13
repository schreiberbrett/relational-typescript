import { Relation2 } from "./Relation"

export interface NotEnoughKnowns {
    kind: 'Not Enough Knowns'
}

export interface UncountablyInfinite {
    kind: 'Uncountably Infinite'
}

export interface Success<T> {
    kind: 'Success',
    iterable: Iterable<T>
}

export type Result1<A>       = Success<A>         | UncountablyInfinite | NotEnoughKnowns
export type Result2<A, B>    = Success<[A, B]>    | UncountablyInfinite | NotEnoughKnowns
export type Result3<A, B, C> = Success<[A, B, C]> | UncountablyInfinite | NotEnoughKnowns

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
        kind: 'Success',
        iterable: array
    }
}

export function fromArray2<A, B>(array: [A, B][]): Result2<A, B> {
    return {
        kind: 'Success',
        iterable: array
    }
}

export function fromArray3<A, B, C>(array: [A, B, C][]): Result3<A, B, C> {
    return {
        kind: 'Success',
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
