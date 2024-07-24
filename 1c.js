// Using Anonymous Function
let sumArray = function(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
};
console.log(sumArray([1, 2, 3, 4, 5])); 

// Using IIFE
(function(arr) {
    let sum = arr.reduce((acc, num) => acc + num, 0);
    console.log(sum);
})([1, 2, 3, 4, 5]);
