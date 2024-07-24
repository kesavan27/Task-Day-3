// Using Anonymous Function
let findMedian = function(arr1, arr2) {
    let merged = [...arr1, ...arr2].sort((a, b) => a - b);
    let mid = Math.floor(merged.length / 2);
    return (merged[mid - 1] + merged[mid]) / 2;
};
console.log(findMedian([1, 3, 5], [2, 4, 6])); 

// Using IIFE
(function(arr1, arr2) {
    let merged = [...arr1, ...arr2].sort((a, b) => a - b);
    let mid = Math.floor(merged.length / 2);
    let median = (merged[mid - 1] + merged[mid]) / 2;
    console.log(median); 
})([1, 3, 5], [2, 4, 6]);
