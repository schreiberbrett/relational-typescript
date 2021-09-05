// An Arbitrary is a Relation1 that never returns 'Not Enough Knowns'

import { Relation1 } from "./Relation";
import { empty1, singleton1 } from "./Result";
import { isNat } from "./util";

export const nat: Relation1<number> = x => {
    if (x.kind === 'Known') {
        return isNat(x.value) ? singleton1(x.value) : empty1()
    }

    // Generator is a subclass of Iterable
    const brett = function*() {
        let i = 0
        while (true) {
            yield i
            i++
        }
    }

    return {
        kind: 'Iterable1',
        iterable: brett()
    }
}
/*
export const int: Relation1<number> = x => {

}

export const fullyReducedRational: Relation1<[number, number]> = x => {
    // Use the farey sequence
}
*/
