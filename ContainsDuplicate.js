// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Example 1:

// Input: [1,2,3,1]
// Output: true
// Example 2:

// Input: [1,2,3,4]
// Output: false
// Example 3:

// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true

const test1 = [1, 2, 3, 1]
const test2 = [1, 2, 3, 4]
const test3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]

const containsDuplicate = (nums) => {
    let newNums = new Set()
    for (i = 0; i < nums.length; i++) {
        if (newNums.has(nums[i])) {
            return true
        } else {
            newNums.add(nums[i])
        }
    }
    return false
};

console.log(containsDuplicate(test1))
console.log(containsDuplicate(test2))
console.log(containsDuplicate(test3))