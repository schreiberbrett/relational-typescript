import { Term } from "../Relation";
import { Result3, Result2 } from "../Result";

export function union<T>(a: Term<Set<T>>, b: Term<Set<T>>, out: Term<Set<T>>): Result3<Set<T>, Set<T>, Set<T>> {
    // TODO
}

export function subset<T>(subset: Term<Set<T>>, superset: Term<Set<T>>): Result2<Set<T>, Set<T>> {

}

export function strictSubset<T>(subset: Term<Set<T>>, superset: Term<Set<T>>): Result2<Set<T>, Set<T>> {
    // TODO
}

export function disjoint<T>(a: Term<Set<T>>, b: Term<Set<T>>): Result2<Set<T>, Set<T>> {
    // TODO
}