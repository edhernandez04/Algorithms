// Given an integer n and an integer start.

// Define an array nums where nums[i] = start + 2*i (0-indexed) and n == nums.length.

// Return the bitwise XOR of all elements of nums.



// Example 1:

// Input: n = 5, start = 0
// Output: 8
// Explanation: Array nums is equal to [0, 2, 4, 6, 8] where (0 ^ 2 ^ 4 ^ 6 ^ 8) = 8.
// Where "^" corresponds to bitwise XOR operator.
// Example 2:

// Input: n = 4, start = 3
// Output: 8
// Explanation: Array nums is equal to [3, 5, 7, 9] where (3 ^ 5 ^ 7 ^ 9) = 8.
// Example 3:

// Input: n = 1, start = 7
// Output: 7
// Example 4:

// Input: n = 10, start = 5
// Output: 2


// Constraints:

// 1 <= n <= 1000
// 0 <= start <= 1000
// n == nums.length

const test1 = {
    n: 5,
    start: 0
}

const test2 = {
    n: 4,
    start: 3
}

const test3 = {
    n: 1,
    start: 7
}

const test4 = {
    n: 10,
    start: 5
}

const xorOperation = (n, start) => {
    let nums = []
    let XOR = 0
    for (let i = 0; i < n; i++) {
        nums[i] = start + 2 * i
        XOR = XOR ^ nums[i]
    }
    return XOR
};

console.log(xorOperation(test1.n, test1.start))
console.log(xorOperation(test2.n, test2.start))
console.log(xorOperation(test3.n, test3.start))
console.log(xorOperation(test4.n, test4.start))