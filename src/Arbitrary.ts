// An Arbitrary is a Relation1 that never returns 'Not Enough Knowns'

import { Relation1 } from "./Relation";

export const nat: Relation1<number> = x => {

}

export const int: Relation1<number> = x => {

}

export const fullyReducedRational: Relation1<[number, number]> = x => {
    // Use the farey sequence
}
