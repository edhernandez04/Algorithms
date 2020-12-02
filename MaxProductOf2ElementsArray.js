// Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).


// Example 1:

// Input: nums = [3,4,5,2]
// Output: 12 
// Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12. 
// Example 2:

// Input: nums = [1,5,4,5]
// Output: 16
// Explanation: Choosing the indices i=1 and j=3 (indexed from 0), you will get the maximum value of (5-1)*(5-1) = 16.
// Example 3:

// Input: nums = [3,7]
// Output: 12


// Constraints:

// 2 <= nums.length <= 500
// 1 <= nums[i] <= 10^3

const test1 = [3,4,5,2]
const test2 = [1,5,4,5]
const test3 = [3,7]

const maxProduct = (nums) => {
    let outPut = 0
    for (i = 0; i < nums.length - 1; i++) {
        for (j = i + 1; j < nums.length; j++) {
            if ((nums[i] - 1) * (nums[j] - 1) > outPut) {
                outPut = (nums[i] - 1) * (nums[j] - 1)
            }
        }
    }
    return outPut
}

console.log(maxProduct(test1))
console.log(maxProduct(test2))
console.log(maxProduct(test3))