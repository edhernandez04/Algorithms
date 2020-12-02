// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Follow up:

// Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
// Could you do it in-place with O(1) extra space?


// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]


// Constraints:

// 1 <= nums.length <= 2 * 104
// -231 <= nums[i] <= 231 - 1
// 0 <= k <= 105

const test1 = {
    nums: [1, 2, 3, 4, 5, 6, 7],
    pivot: 3
}

const test2 = {
    nums: [-1, -100, 3, 99],
    pivot: 2
}

const rotate = (nums, k) => {
    for (i = 0; i < k; i++) {
        nums.unshift(nums[nums.length - 1])
        nums.pop()
    }
    return nums
}

console.log(rotate(test1.nums, test1.pivot))
console.log(rotate(test2.nums, test2.pivot))