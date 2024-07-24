// Using Anonymous Function
let printOddNumbers = function(arr) {
    return arr.filter(num => num % 2 !== 0);
};
console.log(printOddNumbers([1, 2, 3, 4, 5])); 



// Using IIFE
(function(arr) {
    let oddNumbers = arr.filter(num => num % 2 !== 0);
    console.log(oddNumbers);
})([1, 2, 3, 4, 5]);
