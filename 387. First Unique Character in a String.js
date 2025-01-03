// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.



// Example 1:

// Input: s = "leetcode"

// Output: 0

// Explanation:

// The character 'l' at index 0 is the first character that does not occur at any other index.

// Example 2:

// Input: s = "loveleetcode"

// Output: 2

// Example 3:

// Input: s = "aabb"

// Output: -1



// Constraints:

// 1 <= s.length <= 105
// s consists of only lowercase English letters.


/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let l = "";
    for (let i = 0; i < s.length; i++) {
        c = s.charAt(i);
        if (!s.includes(c, i + 1) && !l.includes(c)) {
            return i;
        }
        l += c;
    }
    return -1;
};

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = {};
    let arr = s.split('');
    for (let i of arr) {
        map[i] = (map[i] || 0) + 1;
    }
    return arr.findIndex((i) => map[i] === 1)
};