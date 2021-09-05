export function arrayEquals<T>(a: T[], b: T[]): boolean {
    if (a.length !== b.length) {
        return false
    }

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false
        }
    }

    return true
}

export function isSorted<T>(array: T[]): boolean {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            return false
        }
    }

    return true
}

export function permutations<T>(array: T[]): T[][] {
    if (array.length === 0) {
        return [[]]
    } else if (array.length === 1) {
        return [[array[0]]]
    }

    const [first, ...rest] = array

    return permutations(rest).flatMap(permutation => insertEach(first, permutation))
}

export function insertEach<T>(needle: T, haystack: T[]): T[][] {
    let result = new Array<T[]>()
    
    for (let i = 0; i < haystack.length + 1; i++) {
        result.push([...haystack.slice(0, i), needle, ...haystack.slice(i, haystack.length)])
    }

    return result
}

export function pick<T>(array: T[]): [T, T[]][] {
    let result = new Array<[T, T[]]>()
    for (let i = 0; i < array.length; i++) {
        const first: T[] = array.slice(0, i)
        const middle: T = array[i]
        const rest: T[] = array.slice(i + 1, array.length + 1)

        result.push([middle, [...first, ...rest]])
    }

    return result
}

// TODO: See if this is accurate
export function isNat(x: number): boolean {
    return (x >= 0) && (Math.floor(x) === x)
}

export function setEquals<T>(a: Set<T>, b: Set<T>): boolean {
    for (let x of a.values()) {
        if (!b.has(x)) {
            return false
        }
    }

    for (let x of b.values()) {
        if (!a.has(x)) {
            return false
        }
    }

    return true
}

export function maximum(array: number[]): number | null {
    if (array.length === 0) {
        return null
    }

    let [max, ...rest] = array

    for (let x of rest) {
        max = Math.max(max, x)
    }

    return max
}