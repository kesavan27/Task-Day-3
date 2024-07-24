// Using Arrow Function
const toTitleCaps = (arr) => arr.map(str => str.replace(/\b\w/g, char => char.toUpperCase()));
console.log(toTitleCaps(["hello world", "javascript is fun"])); 
