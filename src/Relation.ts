export type Term<T> = {
    kind: 'Known'
    value: T
} | {
    kind: 'Unknown'
    name: string
}

export type Result1<A> = {
    kind: 'Iterable',
    iterable: Iterable<A>
} | {
    kind: 'Not Enough Knowns'
}

export type Result2<A, B> = {
    kind: 'Iterable',
    iterable: Iterable<[A, B]>
} | {
    kind: 'Not Enough Knowns'
}

export type Result3<A, B, C> = {
    kind: 'Iterable',
    iterable: Iterable<[A, B, C]>
} | {
    kind: 'Not Enough Knowns'
}

// l for "literal"
export function l<T>(value: T): Term<T> {
    return {
        kind: 'Known',
        value
    }
}

export function v<T>(name: string): Term<T> {
    return {
        kind: 'Unknown',
        name
    }
}

export interface Relation1<A> {
    (a: Term<A>): Result1<A>
}

export interface Relation2<A, B> {
    (a: Term<A>, b: Term<B>): Result2<A, B>
}

export interface Relation3<A, B, C> {
    (a: Term<A>, b: Term<B>, c: Term<C>): Result3<A, B, C>
}

export function notEnoughKnowns(): { kind: 'Not Enough Knowns' } {
    return { kind: 'Not Enough Knowns' }
}

export function empty2<A, B>(): Result2<A, B> {
    return fromArray([])
}

export function singleton2<A, B>(a: A, b: B): Result2<A, B> {
    return fromArray([[a, b]])
}

export function singleton3<A, B, C>(a: A, b: B, c: C): Result3<A, B, C> {
    return fromArray3([[a, b, c]])
}

export function fromArray<T>(array: T[]): { kind: 'Iterable', iterable: Iterable<T> } {
    return {
        kind: 'Iterable',
        iterable: array
    }
}

export function empty(): { kind: 'Iterable', iterable: []} {
    return {
        kind: 'Iterable',
        iterable: []
    }
}

export function empty3<A, B, C>(): Result3<A, B, C> {
    return fromArray([])
}

export function adhoc2<A, R>(f: (a: A) => R): Relation2<A, R> {
    return function(a: Term<A>, r: Term<R>) {
        // TODO
    }
}


export function adhoc3<A, B, R>(f: (a: A, b: B) => R): Relation3<A, B, R> {
    return function(a: Term<A>, b: Term<B>, r: Term<R>) {
        // TODO
    }
}