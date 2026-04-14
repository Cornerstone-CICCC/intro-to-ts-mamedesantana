"use strict";
function doubleNumber(num) {
    return num * 2;
}
function squareNumber(num) {
    return num * num;
}
function isEven(num) {
    return num % 2 === 0;
}
function isAdult(age) {
    return age >= 18;
}
function reverseString(text) {
    return text.split("").reverse().join("");
}
function capitalizeString(text) {
    return text.toUpperCase();
}
console.log("doubleNumber(5):", doubleNumber(5));
console.log("squareNumber(4):", squareNumber(4));
console.log("isEven(10):", isEven(10));
console.log("isEven(7):", isEven(7));
console.log("isAdult(20):", isAdult(20));
console.log("isAdult(15):", isAdult(15));
console.log('reverseString("hello"):', reverseString("hello"));
console.log('capitalizeString("mamede"):', capitalizeString("mamede"));
