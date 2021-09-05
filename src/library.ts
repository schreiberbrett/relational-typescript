import { adhoc2 } from "./higher-order-relations"
import { Relation3, Relation2, Term } from "./Relation"
import { notEnoughKnowns, Result2, singleton2, Result3, empty2, fromArray2 } from "./Result"
import { arrayEquals, isSorted, permutations } from "./util"

export const modulo: Relation3<number, number, number> = (dividend, divisor, remainder) => {

}

export const pow: Relation3<number, number, number> = (base, exponent, out) => {

}

export const exp: Relation2<number, number> = (exponent, out) => {

}

export const square: Relation2<number, number> = (x, squared) => {

}

function len<T>(array: T[]): number {
    return array.length
}

export const length = adhoc2(len)

function setSize<T>(set: Set<T>): number {
    return set.size
}

export const size = adhoc2(setSize)
