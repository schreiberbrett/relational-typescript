import { Term } from "../Relation"
import { Result3, singleton3, empty3, notEnoughKnowns, empty2, fromArray2, Result2, singleton2 } from "../Result"
import { arrayEquals, isSorted, permutations } from "../util"


export function sort<T>(array: Term<T[]>, sortedArray: Term<T[]>): Result2<T[], T[]> {
    if (array.kind === 'Known' && sortedArray.kind === 'Known') {
        if (arrayEquals([...array.value].sort(), sortedArray.value)) {
            return singleton2(array.value, sortedArray.value)
        } else {
            return empty2()
        }
    }

    if (array.kind === 'Known' && sortedArray.kind === 'Unknown') {
        return singleton2(array.value, [...array.value].sort())
    }

    if (array.kind === 'Unknown' && sortedArray.kind === 'Known') {
        if (isSorted(sortedArray.value)) {
            return fromArray2(permutations(sortedArray.value).map(permutation => [permutation, sortedArray.value]))
        } else {
            return empty2()
        }
    }

    return notEnoughKnowns()
}


export function cons<T>(first: Term<T>, rest: Term<T[]>, out: Term<T[]>): Result3<T, T[], T[]> {
    if (first.kind === 'Known' && rest.kind === 'Known' && out.kind === 'Known') {
        if (arrayEquals([first.value, ...rest.value], out.value)) {
            return singleton3(first.value, rest.value, out.value)
        } else {
            return empty3()
        }
    }

    if (first.kind === 'Known' && rest.kind === 'Known' && out.kind === 'Unknown') {
        return singleton3(first.value, rest.value, [first.value, ...rest.value])
    }

    if (first.kind === 'Known' && rest.kind === 'Unknown' && out.kind === 'Known') {
        if (out.value.length !== 0 && first.value === out.value[0]) {
            return singleton3(first.value, out.value.slice(1, out.value.length) ,out.value)
        } else {
            return empty3()
        } 
    }

    if (first.kind === 'Unknown' && rest.kind === 'Known' && out.kind === 'Known') {
        if (out.value.length !== 0 && arrayEquals(rest.value, out.value.slice(1, out.value.length))) {
            return singleton3(out.value[0], rest.value, out.value)
        } else {
            return empty3()
        }
    }
    
    return notEnoughKnowns()
}

export function reverse<T>(a: Term<T[]>, b: Term<T[]>): Result2<T[], T[]> {
    // TODO
}

export function permutation<T>(a: Term<T[]>, b: Term<T[]>): Result2<T[], T[]> {
    // TODO
}


export function zip<A, B>(as: Term<A[]>, bs: Term<B[]>, pairs: Term<[A, B][]>): Result3<A[], B[], [A, B][]> {
    // TODO
}