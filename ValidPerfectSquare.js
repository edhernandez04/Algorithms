// Given a positive integer num, write a function which returns True if num is a perfect square else False.

// Follow up: Do not use any built-in library function such as sqrt.



// Example 1:

// Input: num = 16
// Output: true
// Example 2:

// Input: num = 14
// Output: false


// Constraints:

// 1 <= num <= 2^31 - 1

const test1 = 16
const test2 = 14

const isPerfectSquare = (num) => {
    if (Math.sqrt(num) % 1 === 0)
        return true
    else
        return false
};

console.log(isPerfectSquare(test1))
console.log(isPerfectSquare(test2))