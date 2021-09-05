import { nat } from '../src/Arbitrary'
import { pick } from "../src/util";

describe("factors", () => {
    it("{1, 2, 3, 6} are the factors of 6", () => {
        const result = nat({kind: 'Unknown', name: 'X'})

        if (result.kind === 'Iterable1') {
            const iterator = result.iterable[Symbol.iterator]()

            for(let i = 0; i < 30; i++) {
                console.log(iterator.next())
            }
        }
    })

    it("[1, 1, 2, 3, 6]", () => {

    })

    it("should work with factors known and product unknown", () => {

    })

    it("should work with factors unknown and product unknown", () => {

    })
})