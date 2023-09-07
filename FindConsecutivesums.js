/* 
    You are given a list of integers. Find all the consecutive sets of 
    integers that adds up to the sum passed in as one of the inputs.
*/

const numbers1_1 = [2, 5, 3, 6, 7, 23, 12];
const sum1 = 16;
const expected1_1 = [
    [2, 5, 3, 6],
    [3, 6, 7],
];

const numbers2_1 = [];
const sum2 = 5;
const expected2_1 = [];

const numbers3_1 = [10, 15, 20, 35, 30];
const sum3 = 5;
const expected3_1 = [];

// Bonus:
const numbers4_1 = [2, 5, 3, 6, 7, 0, 0, 23, 12];
const sum4 = 16;
const expected4_1 = [
    [2, 5, 3, 6],
    [3, 6, 7],
    [3, 6, 7, 0],
    [3, 6, 7, 0, 0],
];

// Bonus:
const numbers5_1 = [-2, -5, -3, -6, -7, -0, -0, -23, -12];
const sum5 = -16;
const expected5 = [
    [-2, -5, -3, -6],
    [-3, -6, -7],
    [-3, -6, -7, -0],
    [-3, -6, -7, -0, -0],
];

/**
 * Finds all the sets of consecutive numbers that sum to the given target sum.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} numbers Unordered numbers.
 * @param {number} targetSum
 * @returns {Array<Array<number>>} 2d array where each nested array is a set of
 *    consecutive numbers that add up to the given targetSum. Consecutive in
 *    this context means the numbers whose indexes are one after the other
 *    only.
 */
function findConsecutiveSums(numbers, targetSum) {
    // Remember: We're looking for **consecutive** values.
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        let currentSum = numbers[i];

        for (let j = i + 1; j <= numbers.length; j++) {
            if (currentSum === targetSum) {
                result.push(numbers.slice(i, j));
            }
            currentSum += numbers[j];
        }
    }
    return result;
}

console.log(findConsecutiveSums(numbers1_1, sum1));
console.log(findConsecutiveSums(numbers2_1, sum2));
console.log(findConsecutiveSums(numbers3_1, sum3));
console.log(findConsecutiveSums(numbers4_1, sum4));
console.log(findConsecutiveSums(numbers5_1, sum5));
