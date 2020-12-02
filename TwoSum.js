// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]


// Constraints:

// 2 <= nums.length <= 103
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

const test1 = {
    nums: [2, 7, 11, 15],
    target: 9
}

const test2 = {
    nums: [3, 2, 4],
    target: 6
}

const test3 = {
    nums: [3, 3],
    target: 6
}

const twoSum = (nums, target) => {
    let ownedNums = new Set()
    for (i = 0; i < nums.length; i++) {
        let secondNum = target - nums[i]
        if (ownedNums.has(secondNum)) {
            return [nums.indexOf(secondNum), i]
        } else {
            ownedNums.add(nums[i])
        }
    }
};

console.log(twoSum(test1.nums, test1.target))
console.log(twoSum(test2.nums, test2.target))
console.log(twoSum(test3.nums, test3.target))