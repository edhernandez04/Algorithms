// You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

// The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: J = "aA", S = "aAAbbbb"
// Output: 3
// Example 2:

// Input: J = "z", S = "ZZ"
// Output: 0
// Note:

// S and J will consist of letters and have length at most 50.
// The characters in J are distinct.

const test1 = {
    J: 'aA',
    S: 'aAAbbbb'
}

const test2 = {
    J: 'z',
    S: 'ZZ'
}

const numJewelsInStones = (J, S) => {
    let output = 0
    jewels = J.split('')
    stones = S.split('')
    for (const el of jewels) {
        for (const sel of stones) {
            if (sel == el)
                output += 1
        }
    }
    return output
};

console.log(numJewelsInStones(test1.J, test1.S))
console.log(numJewelsInStones(test2.J, test2.S))
