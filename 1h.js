// Using Anonymous Function
let rotateArray = function(arr, k) {
    k = k % arr.length;
    return arr.slice(k).concat(arr.slice(0, k));
};
console.log(rotateArray([1, 2, 3, 4, 5], 2)); 

// Using IIFE
(function(arr, k) {
    k = k % arr.length;
    let rotatedArray = arr.slice(k).concat(arr.slice(0, k));
    console.log(rotatedArray); 
})([1, 2, 3, 4, 5], 2);
