import { add } from "./relations/add"
import { sine } from "./relations/trigonometry"
import { Result1, Result2, Result3 } from "./Result"
import { pick } from "./util"

export interface Known<T> {
    kind: 'Known'
    value: T
}

export interface Unknown {
    kind: 'Unknown'
    name: string
}

export type Term<T> = Known<T> | Unknown

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


export function relation1<A>(
    f1: (a: A) => Result1<A>,
    f2: ()     => Result1<A>,
): Relation1<A> {
    return a => {
               if (a.kind === 'Known'  ) {
            return f1(a.value)
        } else /* (a.kind === 'Unknown') */ {
            return f2()
        }
    }
}

export function relation2<A, B>(
    f1: (a: A, b: B) => Result2<A, B>,
    f2: (a: A)       => Result2<A, B>,
    f3: (b: B)       => Result2<A, B>,
    f4: ()           => Result2<A, B>
): Relation2<A, B> {
    return (a, b) => {
               if (a.kind === 'Known'   && b.kind === 'Known') {
            return f1(a.value, b.value)
        } else if (a.kind === 'Known'   && b.kind === 'Unknown') {
            return f2(a.value)
        } else if (a.kind === 'Unknown' && b.kind === 'Known') {
            return f3(b.value)
        } else /* (a.kind === 'Unknown' && b.kind === 'Unknown') */ {
            return f4()
        }
    }
}

export function relation3<A, B, C>(
    f1: (a: A, b: B, c: C) => Result3<A, B, C>,
    f2: (a: A, b: B      ) => Result3<A, B, C>,
    f3: (a: A,       c: C) => Result3<A, B, C>,
    f4: (a: A            ) => Result3<A, B, C>,
    f5: (      b: B, c: C) => Result3<A, B, C>,
    f6: (      b: B      ) => Result3<A, B, C>,
    f7: (            c: C) => Result3<A, B, C>,
    f8: (                ) => Result3<A, B, C>,
): Relation3<A, B, C> {
    return (a, b, c) => {
               if (a.kind === 'Known'   && b.kind === 'Known'   && c.kind === 'Known') {
            return f1(a.value, b.value, c.value)
        } else if (a.kind === 'Known'   && b.kind === 'Known'   && c.kind === 'Unknown') {
            return f2(a.value, b.value)
        } else if (a.kind === 'Known'   && b.kind === 'Unknown' && c.kind === 'Known') {
            return f3(a.value, c.value)
        } else if (a.kind === 'Known'   && b.kind === 'Unknown' && c.kind === 'Unknown') {
            return f4(a.value)
        } else if (a.kind === 'Unknown' && b.kind === 'Known'   && c.kind === 'Known') {
            return f5(b.value, c.value)
        } else if (a.kind === 'Unknown' && b.kind === 'Known'   && c.kind === 'Unknown') {
            return f6(b.value)
        } else if (a.kind === 'Unknown' && b.kind === 'Unknown' && c.kind === 'Known') {
            return f7(c.value)
        } else /* (a.kind === 'Unknown' && b.kind === 'Unknown' && c.kind === 'Unknown') */ {
            return f8()
        }
    }
}


export function relation2Named<A, B>(
    f1: (a: A,      b: B) => Result2<A, B>,
    f2: (a: A,      b: string) => Result2<A, B>,
    f3: (a: string, b: B) => Result2<A, B>,
    f4: (a: string, b: string) => Result2<A, B>,
): Relation2<A, B> {
    return (a, b) => {
               if (a.kind === 'Known'   && b.kind === 'Known') {
            return f1(a.value, b.value)
        } else if (a.kind === 'Known'   && b.kind === 'Unknown') {
            return f2(a.value, b.name)
        } else if (a.kind === 'Unknown' && b.kind === 'Known') {
            return f3(a.name,  b.value)
        } else if (a.kind === 'Unknown' && b.kind === 'Unknown') {
            return f4(a.name,  b.name)
        }

        // Unreachable
        return null as any
    }
}



export function relation3Named<A, B, C>(
    f1: (a: A,      b: B,      c: C)      => Result3<A, B, C>,
    f2: (a: A,      b: B,      c: string) => Result3<A, B, C>,
    f3: (a: A,      b: string, c: C)      => Result3<A, B, C>,
    f4: (a: A,      b: string, c: string) => Result3<A, B, C>,
    f5: (a: string, b: B,      c: C)      => Result3<A, B, C>,
    f6: (a: string, b: B,      c: string) => Result3<A, B, C>,
    f7: (a: string, b: string, c: C)      => Result3<A, B, C>,
    f8: (a: string, b: string, c: string) => Result3<A, B, C>
): Relation3<A, B, C> {
    return (a, b, c) => {
               if (a.kind === 'Known'   && b.kind === 'Known'   && c.kind === 'Known') {
            return f1(a.value, b.value, c.value)
        } else if (a.kind === 'Known'   && b.kind === 'Known'   && c.kind === 'Unknown') {
            return f2(a.value, b.value, c.name)
        } else if (a.kind === 'Known'   && b.kind === 'Unknown' && c.kind === 'Known') {
            return f3(a.value, b.name,  c.value)
        } else if (a.kind === 'Known'   && b.kind === 'Unknown' && c.kind === 'Unknown') {
            return f4(a.value, b.name,  c.name)
        } else if (a.kind === 'Unknown' && b.kind === 'Known'   && c.kind === 'Known') {
            return f5(a.name,  b.value, c.value)
        } else if (a.kind === 'Unknown' && b.kind === 'Known'   && c.kind === 'Unknown') {
            return f6(a.name,  b.value, c.name)
        } else if (a.kind === 'Unknown' && b.kind === 'Unknown' && c.kind === 'Known') {
            return f7(a.name,  b.name,  c.value)
        } else if (a.kind === 'Unknown' && b.kind === 'Unknown' && c.kind === 'Unknown') {
            return f8(a.name,  b.name,  c.name)
        }

        // Unreachable
        return null as any
    }
}


export function table2<A, B>(table: [A, B][]): Relation2<A, B> {
    return (a, b) => {
        return {
            kind: 'Success',
            iterable: table.filter(([trueA, trueB]) => {
                const aMatches = a.kind !== 'Known' || a.value === trueA
                const bMatches = b.kind !== 'Known' || b.value === trueB

                return aMatches && bMatches
            })
        }
    }
}


export function table3<A, B, C>(table: [A, B, C][]): Relation3<A, B, C> {
    return (a, b, c) => {
        return {
            kind: 'Success',
            iterable: table.filter(([trueA, trueB, trueC]) => {
                const aMatches = a.kind !== 'Known' || a.value === trueA
                const bMatches = b.kind !== 'Known' || b.value === trueB
                const cMatches = c.kind !== 'Known' || c.value === trueC

                return aMatches && bMatches && cMatches
            })
        }
    }
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
