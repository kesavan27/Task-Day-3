// Using Anonymous Function
let removeDuplicates = function(arr) {
    return [...new Set(arr)];
};
console.log(removeDuplicates([1, 2, 3, 3, 4, 4, 5])); 

// Using IIFE
(function(arr) {
    let uniqueArray = [...new Set(arr)];
    console.log(uniqueArray); 
})([1, 2, 3, 3, 4, 4, 5]);
