/*
primitive
1. String
2. Number
3, Boolean
4. null
5. undefined
6. Symbol
7. BigInt
*/

const score =100;
const scoreValue =100.3;

const isLoggedIn =false;
const outsideTemp = null;

let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 55554688648838647n


/*

Reference(Non primitive)

Arrays, objects, Functions

js is dynamically  typed language

*/

const heros = ["shaktiman","naagraj", "doga"]
let myObj = {
    name:'kiran',
    age: 23
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);