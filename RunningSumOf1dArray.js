// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.



// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
// Example 3:

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]


// Constraints:

// 1 <= nums.length <= 1000
// -10^6 <= nums[i] <= 10^6

const test1 = [1, 2, 3, 4]
const test2 = [1, 1, 1, 1, 1]
const test3 = [3, 1, 2, 10, 1]

const runningSum = (nums) => {
    const answer = [nums[0]]
    let total = nums[0]
    for (let i = 1; i < nums.length; i++) {
        total = nums[i] + total
        answer.push(total)
    }
    return answer
};

console.log(runningSum(test1))
console.log(runningSum(test2))
console.log(runningSum(test3))