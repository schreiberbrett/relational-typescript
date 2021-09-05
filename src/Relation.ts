import { add, sine } from "./library"
import { Result1, Result2, Result3, NotEnoughKnowns, fromArray2 } from "./Result"
import { pick } from "./util"

export type Term<T> = {
    kind: 'Known'
    value: T
} | {
    kind: 'Unknown'
    name: string
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

export const allNegative: Relation1<number[]> = x => {

}

// Adapted from https://unsafe-perform.io/posts/2020-02-21-existential-quantification-in-typescript

type Row3 = {
    kind: 'Row3'
    f: <R>(run: <A, B, C>(r: Relation3<A, B, C>, a: Term<A>, b: Term<B>, c: Term<C>) => R) => R
}

const row3 = <A, B, C>(r: Relation3<A, B, C>, a: Term<A>, b: Term<B>, c: Term<C>): Row3 => ({kind: 'Row3', f: run => run(r, a, b, c)})


type Row2 = {
    kind: 'Row2'
    f: <R>(run: <A, B>(r: Relation2<A, B>, a: Term<A>, b: Term<B>) => R) => R
}

const row2 = <A, B>(r: Relation2<A, B>, a: Term<A>, b: Term<B>): Row2 => ({kind: 'Row2', f: run => run(r, a, b)})

type Row1 = {
    kind: 'Row1'   
    f: <R>(run: <A>(r: Relation1<A>, a: Term<A>) => R) => R
}

const row1 = <A>(r: Relation1<A>, a: Term<A>): Row1 => ({kind: 'Row1', f: run => run(r, a)})

type Row = Row1 | Row2 | Row3

// <exists A>(T<A>) = <R>(cont: (<A> (t: T<A>) => R)) => R

const x = v<number>('x')

const array: Row[] = [
    row2(sine, x, v('y')),
    row3(add, l(1), l(2), l(3))
]

function brett<A, B, C>(f: (a: Term<A>, b: Term<B>, c: Term<C>) => Row[]): Relation3<A, B, C> {
    const a = v<A>('a')
    const b = v<B>('b')
    const c = v<C>('c')

    const rows: Row[] = f(a, b, c)

    nick(rows)

    for (let [first, rest] of picks) {

    }
}

function nick3<A, B, C>(assignments: Map<string, any>, rows: Row[]): Result3<A, B, C> {
    if (rows.every(row =>
        (row.kind === 'Row1' && run1(row).kind === 'Not Enough Knowns') ||
        (row.kind === 'Row2' && run2(row).kind === 'Not Enough Knowns') ||
        (row.kind === 'Row3' && run3(row).kind === 'Not Enough Knowns')
    )) {
        return { kind: 'Not Enough Knowns' }
    }

    for (let [row, rest] of pick(rows)) {
        if (row.kind === 'Row1') {
            if (run1(row).kind === 'Not Enough Knowns') {
                continue
            } 



        } else if (row.kind === 'Row2') {
            
        } else if (row.kind === 'Row3') {

        }

        const rowResult = run(row) // row.f((r, a, b, c) )

        nick3(rest)
    }
}

function assignValuesToRows<T>(name: string, values: T[], rows: Row[]): Row[] {
    let result: Row[] = rows

    for (let value of values) {
        result = result.map(row => assignValueToRow(name, value, row))
    }

    return result
}

function assignValueToRow<T>(name: string, value: T, row: Row): Row {
    switch (row.kind) {
        case 'Row1': return assign1(name, value, row)
        case 'Row2': return assign2(name, value, row)
        case 'Row3': return assign3(name, value, row)
    }
}

function assign1<T>(name: string, value: T, row: Row1): Row1 {
    return row.f((r, a) => row1(
        r,
        a.kind === 'Unknown' && a.name === name ? l(value) as any : a
    ))
}

function assign2<T>(name: string, value: T, row: Row2): Row2 {
    return row.f((r, a, b) => row2(
        r,
        a.kind === 'Unknown' && a.name === name ? l(value) as any : a,
        b.kind === 'Unknown' && b.name === name ? l(value) as any : b
    ))
}

function assign3<T>(name: string, value: T, row: Row3): Row3 {
    return row.f((r, a, b, c) => row3(
        r,
        a.kind === 'Unknown' && a.name === name ? l(value) as any : a,
        b.kind === 'Unknown' && b.name === name ? l(value) as any : b,
        c.kind === 'Unknown' && c.name === name ? l(value) as any : c,
    ))
}

function run1(row: Row1): Result1<unknown> {
    return row.f((r, a) => r(a))
}

function run2(row: Row2): Result2<unknown, unknown> {
    return row.f((r, a, b) => r(a, b))
}

function run3(row: Row3): Result3<unknown, unknown, unknown> {
    return row.f((r, a, b, c) => r(a, b, c))
}
