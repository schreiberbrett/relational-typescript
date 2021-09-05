import { Relation1, Relation2, Relation3 } from "./Relation";

export function pair<A, B>(a: Relation1<A>, b: Relation1<B>): Relation1<[A, B]> {

}

export function set<T>(generator: Relation1<T>): Relation1<Set<T>> {

}

export function array<T>(generator: Relation1<T>): Relation1<T[]> {

}

export function lift<A, B>(relation: Relation2<A, B>): Relation2<A[], B[]> {

}

export function flip<A, B>(relation: Relation2<A, B>): Relation2<B, A> {

}

export function fromPredicate<A>(predicate: (a: A) => boolean): Relation1<A> {
    return (a) => {

    }
}

export function adhoc2<A, R>(f: (a: A) => R): Relation2<A, R> {
    return (a, r) => {
        // TODO
    }
}


export function adhoc3<A, B, R>(f: (a: A, b: B) => R): Relation3<A, B, R> {
    return (a, b, r) => {
        // TODO
    }
}
