//#region Task
/**
 * Challenge (Live Coding Practice) - Task 2
 * 
 * Given an array of integers, find the SECOND maximum DISTINCT number.
 * 
 * If it doesn't exist (array has less than 2 distinct numbers), return null.
 * 
 * Example:
 * nums = [5, 1, 5, 3, 6, 6]
 * Max = 6
 * Second max = 5
 * Output = 5
 * 
 * Common mistakes:
 * - Only finding the first maximum and forgetting about distinctness.
 * - Not handling duplicates properly.
 * - Ignoring negative numbers or arrays with too few elements.
 */
//#endregion Task

//#region DB

const nums1 = [5, 1, 5, 3, 6, 6]; // Expected second max: 5
const nums2 = [2, 2, 3, 1];       // Expected second max: 2
const nums3 = [7];                // Expected second max: null
const nums4 = [-2, -1, -3];       // Expected second max: -2

//#endregion DB

//#region Solution

function secondMax(nums: number[]): number | null {
  let max: number | null = null;
  let secondMax: number | null = null;

// check for empty arry
  if (nums.length < 2) {
    return null;
  }

  // itterate through the numbers
  for (const num of nums) {

    // check for duplicates
    if (num === max || num === secondMax) continue;
   
    // max is null and new max
    if (max === null || num > max) {

        secondMax = max;
        max = num;
        
    // check for new second max
    } else if (secondMax === null || num > secondMax) {
        secondMax = num;
    } 
  }
  return secondMax;
}

//#endregion Solution

//#region Test

import testUtils from '../../utils/testHelpers';

testUtils.runTest('TEST - secondMax with duplicates', () => {
  testUtils.expectEqual(secondMax(nums1), 5);
});

testUtils.runTest('TEST - secondMax simple case', () => {
  testUtils.expectEqual(secondMax(nums2), 2);
});

testUtils.runTest('TEST - secondMax single element', () => {
  testUtils.expectEqual(secondMax(nums3), null);
});

testUtils.runTest('TEST - secondMax negative numbers', () => {
  testUtils.expectEqual(secondMax(nums4), -2);
});

//#endregion Test
