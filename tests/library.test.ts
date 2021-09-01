import { factors, l, v, permutations, insertEach, sort } from "../src/library";

describe("factors", () => {
    it("{1, 2, 3, 6} are the factors of 6", () => {
        const result = sort(l([3, 2, 2]), l([2, 2, 3]))
        if (result.kind === 'Iterable') {
            console.log([...result.iterable])
        }
    })

    it("[1, 1, 2, 3, 6]", () => {

    })

    it("should work with factors known and product unknown", () => {

    })

    it("should work with factors unknown and product unknown", () => {

    })
})