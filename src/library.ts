import { arrayEquals, isSorted, permutations } from "./util"
import { adhoc2, empty, fromArray, notEnoughKnowns, Relation1, Relation2, Relation3, Result1, Result2, Result3, singleton2, singleton3, Term } from "./Relation"

export const add: Relation3<number, number, number> = (x, y, out) => {
    if (x.kind === 'Known' && y.kind === 'Known' && out.kind === 'Known') {
        if (x.value + y.value === out.value) {
            return fromArray([
                [x.value, y.value, out.value]
            ])
        } else {
            return empty()
        }
    } else if (x.kind === 'Known' && y.kind === 'Known' && out.kind === 'Unknown') {
        return fromArray([
            [x.value, y.value, x.value + y.value]
        ])
    } else if (x.kind === 'Unknown' && y.kind === 'Known' && out.kind === 'Known') {
        return fromArray([
            [out.value - y.value, y.value, out.value]
        ])
    } else if (x.kind === 'Known' && y.kind === 'Unknown' && out.kind === 'Known') {
        return fromArray([
            [x.value, out.value - x.value, out.value]
        ])
    } else if (x.kind === 'Unknown' && y.kind === 'Unknown' && out.kind === 'Known') {
        let retVal = new Array<[number, number, number]>()

        for (let i = 0; i < out.value; i++) {
            retVal.push([i, out.value - i, out.value])
        }

        return fromArray(retVal)
    } else {
        return notEnoughKnowns()
    }
}

export const multiply: Relation3<number, number, number> = (x, y, out) => {
    // TODO
}

export const factors: Relation2<Set<number>, number> = (factors, product) => {
    // TODO
}

export function sort<T>(array: Term<T[]>, sortedArray: Term<T[]>): Result2<T[], T[]> {
    if (array.kind === 'Known' && sortedArray.kind === 'Known') {
        if (arrayEquals([...array.value].sort(), sortedArray.value)) {
            return singleton2(array.value, sortedArray.value)
        } else {
            return empty()
        }
    }

    if (array.kind === 'Known' && sortedArray.kind === 'Unknown') {
        return singleton2(array.value, [...array.value].sort())
    }

    if (array.kind === 'Unknown' && sortedArray.kind === 'Known') {
        if (isSorted(sortedArray.value)) {
            return fromArray(permutations(sortedArray.value).map(permutation => [permutation, sortedArray.value]))
        } else {
            return empty()
        }
    }

    return notEnoughKnowns()
}

export function reverse<T>(a: Term<T[]>, b: Term<T[]>): Result2<T[], T[]> {
    // TODO
}

export function union<T>(a: Term<Set<T>>, b: Term<Set<T>>, out: Term<Set<T>>): Result3<Set<T>, Set<T>, Set<T>> {
    // TODO
}

export function cons<T>(first: Term<T>, rest: Term<T[]>, out: Term<T[]>): Result3<T, T[], T[]> {
    if (first.kind === 'Known' && rest.kind === 'Known' && out.kind === 'Known') {
        if (arrayEquals([first.value, ...rest.value], out.value)) {
            return singleton3(first.value, rest.value, out.value)
        } else {
            return empty()
        }
    }

    if (first.kind === 'Known' && rest.kind === 'Known' && out.kind === 'Unknown') {
        return singleton3(first.value, rest.value, [first.value, ...rest.value])
    }

    if (first.kind === 'Known' && rest.kind === 'Unknown' && out.kind === 'Known') {
        if (out.value.length !== 0 && first.value === out.value[0]) {
            return singleton3(first.value, out.value.slice(1, out.value.length) ,out.value)
        } else {
            return empty()
        } 
    }

    if (first.kind === 'Unknown' && rest.kind === 'Known' && out.kind === 'Known') {
        if (out.value.length !== 0 && arrayEquals(rest.value, out.value.slice(1, out.value.length))) {
            return singleton3(out.value[0], rest.value, out.value)
        } else {
            return empty()
        }
    }
    
    return notEnoughKnowns()
}

export function subset<T>(subset: Term<Set<T>>, superset: Term<Set<T>>): Result2<Set<T>, Set<T>> {

}

export function strictSubset<T>(subset: Term<Set<T>>, superset: Term<Set<T>>): Result2<Set<T>, Set<T>> {
    // TODO
}

export function disjoint<T>(a: Term<Set<T>>, b: Term<Set<T>>): Result2<Set<T>, Set<T>> {
    // TODO
}

export function permutation<T>(a: Term<T[]>, b: Term<T[]>): Result2<T[], T[]> {
    // TODO
}


export function zip<A, B>(as: Term<A[]>, bs: Term<B[]>, pairs: Term<[A, B][]>): Result3<A[], B[], [A, B][]> {
    // TODO
}

export const sine: Relation2<number, number> = (angle, height) => {

}

export const cosine: Relation2<number, number> = (angle, width) => {

}

export const tangent: Relation2<number, number> = (angle, ratio) => {

}

export const cotangent: Relation2<number, number> = (angle, out) => {

}

export const secant: Relation2<number, number> = (angle, out) => {

}

export const cosecant: Relation2<number, number> = (angle, out) => {
    
}

export const modulo: Relation3<number, number, number> = (dividend, divisor, remainder) => {

}

export const pow: Relation3<number, number, number> = (base, exponent, out) => {

}

export const exp: Relation2<number, number> = (exponent, out) => {

}

export const and: Relation3<boolean, boolean, boolean> = (a, b, out) => {

}

export const or: Relation3<boolean, boolean, boolean> = (a, b, out) => {
    
}

export const not: Relation2<boolean, boolean> = (a, b) => {
    
}

export const xor: Relation3<boolean, boolean, boolean> = (a, b, out) => {
    
}

export const implies: Relation3<boolean, boolean, boolean> = (a, b, out) => {
    
}

export const square: Relation2<number, number> = (x, squared) => {

}

export const isSquareNat: Relation1<number> = x => {

}

export function sorted<T>(array: Term<T[]>): Result1<T[]> {
    
}

export const isNat: Relation1<number> = x => {

}

function len<T>(array: T[]): number {
    return array.length
}

export const length = adhoc2(len)

function setSize<T>(set: Set<T>): number {
    return set.size
}

export const size = adhoc2(setSize)

/*
    isEvenNat(X) :-
        isNat(X),
        isNat(Y),
        multiply(X, 2, Y).
*/