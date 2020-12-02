// Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

// Each letter in the magazine string can only be used once in your ransom note.

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true


// Constraints:

// You may assume that both strings contain only lowercase letters.

const test1 = {
    ransomNote: 'a',
    magazine: 'b'
}

const test2 = {
    ransomNote: 'aa',
    magazine: 'ab'
}

const test3 = {
    ransomNote: 'aa',
    magazine: 'aab'
}

const canConstruct = (ransomNote, magazine) => {
    const ransom = ransomNote.split('')
    const mags = magazine.split('')
    let checkArr = []

    ransom.forEach(letter => {
        index = mags.indexOf(letter)
        if (index >= 0) {
            delete mags[index]
            checkArr.push(letter)
        }
    })
    return ransom.join('') === checkArr.join('')
};

console.log(canConstruct(test1.ransomNote, test1.magazine))
console.log(canConstruct(test2.ransomNote, test2.magazine))
console.log(canConstruct(test3.ransomNote, test3.magazine))