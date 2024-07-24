// Using Anonymous Function
let isPalindrome = str => {
    return str === str.split('').reverse().join('');
};
let getPalindromes = function(arr) {
    return arr.filter(isPalindrome);
};
console.log(getPalindromes(["madam", "hello", "racecar", "world"])); 

// Using IIFE
(function(arr) {
    let isPalindrome = str => {
        return str === str.split('').reverse().join('');
    };
    let palindromes = arr.filter(isPalindrome);
    console.log(palindromes); 
})(["madam", "hello", "racecar", "world"]);
