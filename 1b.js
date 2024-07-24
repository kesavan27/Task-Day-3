 //Using Anonymous 

let toTitleCaps = function(arr) {
    return arr.map(function(str) {
        return str.replace(/\b\w/g, function(char) {
            return char.toUpperCase();
        });
    });
};
console.log(toTitleCaps(["hello world", "javascript is fun"])); 


//Using IIFE

(function(arr) {
    let titleCaps = arr.map(function(str) {
        return str.replace(/\b\w/g, function(char) {
            return char.toUpperCase();
        });
    });
    console.log(titleCaps); 
})(["hello world", "javascript is fun"]);
