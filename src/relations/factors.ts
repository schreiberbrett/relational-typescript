import { relation2 } from "../Relation"
import { empty2, singleton2 } from "../Result"
import { isNat, maximum, setEquals } from "../util"

export const factors = relation2<number, Set<number>>(
    (product, factors) => areFactors(product, factors)
        ? singleton2(product, factors)
        : empty2(),

    product => (isNat(product) && product !== 0)
        ? singleton2(product, findFactors(product))
        : empty2(),

    factors => {
        if (factors.size === 0) {
            return empty2()
        }

        const [first, ...rest] = factors.values()

        // The largest factor of a number is the number itself
        const assumedProduct = maximum(rest) ?? first

        return areFactors(assumedProduct, factors)
            ? singleton2(assumedProduct, factors)
            : empty2()
    },

    () => ({
        kind: 'Success',
        iterable: function*() {
            let product = 1 // must be a natural number >= 1
            while (true) {
                yield [product, findFactors(product)] as [number, Set<number>]
                product++
            }
        }()
    })
)

function areFactors(product: number, factors: Set<number>): boolean {
    if (product === 0 || !isNat(product)) {
        return false
    }

    if (![...factors.values()].every(factor => product % factor === 0)) {
        return false
    }

    let trueFactors = findFactors(product)

    return setEquals(factors, trueFactors)
}

/**
 * @param n A natural number greater than 0
 * @returns The set of numbers which divide n
 */
function findFactors(n: number): Set<number> {
    let result = new Set<number>()

    // Trial division
    for (let i = 1; i < Math.ceil(n / 2); i++) {
        if (n % i === 0) {
            result.add(i)
        }
    }

    return result
}