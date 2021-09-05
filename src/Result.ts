export interface NotEnoughKnowns {
    kind: 'Not Enough Knowns'
}

export type Result1<A> = NotEnoughKnowns | {
    kind: 'Iterable1',
    iterable: Iterable<A>
}

export type Result2<A, B> = NotEnoughKnowns | {
    kind: 'Iterable2',
    iterable: Iterable<[A, B]>
}

export type Result3<A, B, C> = NotEnoughKnowns | {
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
