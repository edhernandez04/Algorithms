// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// Example 1:

// Input: [3,2,3]
// Output: 3
// Example 2:

// Input: [2,2,1,1,1,2,2]
// Output: 2

const test1 = [3, 2, 3]
const test2 = [2, 2, 1, 1, 1, 2, 2]

const majorityElement = (nums) => {
    nums.sort((a, b) => a - b);
    const length = nums.length;
    if (length % 2 === 0) {
        return nums[length / 2]
    } else {
        return nums[(length - 1) / 2]
    }
};

console.log(majorityElement(test1))
console.log(majorityElement(test2))

