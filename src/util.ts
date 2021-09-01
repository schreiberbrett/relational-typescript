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
