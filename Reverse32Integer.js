// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
// Example 4:

// Input: x = 0
// Output: 0


// Constraints:

// -231 <= x <= 231 - 1

var reverse = function (x) {
    let y = Math.abs(x)
    const array = ('' + y).split('')
    let answer = []
    for (let i = array.length - 1; i >= 0; i--) {
        answer.push(array[i])
    }
    const final = answer.join('')
    if (final > 2 ** 31 || final < (-2) ** 31) {
        return 0
    }
    return Math.sign(x) === 1 ? final : final * -1
};

console.log(reverse(123))
console.log(reverse(-321))
console.log(reverse(1534236469))