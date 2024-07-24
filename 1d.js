// Using Anonymous Function
let isPrime = num => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};
let getPrimes = function(arr) {
    return arr.filter(isPrime);
};
console.log(getPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); 

// Using IIFE
(function(arr) {
    let isPrime = num => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };
    let primes = arr.filter(isPrime);
    console.log(primes); 
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
