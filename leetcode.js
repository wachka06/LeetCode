// 17. Letter Combinations of a Phone Number
// Medium

// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example:
// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
// Note:
// Although the above answer is in lexicographical order, your answer could be in any order you want.
// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

let dictionary = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

function combine(arr1, arr2) {
  let result = [];
  if (arr1.length === 0) {
    return arr2;
  } else {
    for (let char1 of arr1) {
      for (let char2 of arr2) {
        result.push(char1 + char2);
      }
    }
  }
  return result;
}

// console.log("combine", combine(["a", "b", "c"], ["d", "e", "f"]));
// console.log("combine", combine([], ["d", "e", "f"]));

function recursiveCombine(result, nums) {
  console.log("numsLength", nums.length);
  if (nums.length === 0) {
    return "error";
  } else if (nums.length === 1) {
    // base case
    return combine(result, dictionary[nums[0]]);
  } else {
    nextChar = dictionary[nums[0]];
    console.log("nextChar", nextChar);
    result = combine(result, nextChar);
    console.log("result", result);
    console.log("length", nums.length);
    nums = nums.slice(1);
    console.log("nums", nums);
    return recursiveCombine(result, nums);
  }
}

// console.log("recursiveComb", recursiveCombine([], "23"));

var letterCombinations = function (digits) {
  return recursiveCombine([], digits);
};

console.log("23", letterCombinations("23"));
