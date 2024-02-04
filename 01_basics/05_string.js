const name = "kiran"
const repoCount = 14

//console.log(name + repoCount + "Value");

console.log(`Hello My name is ${name} and my repo count is ${repoCount}`); // this kind of syntax is called baytiex 

const gameName = new String("GTA-sdsdsd-kiran-com-jadhav") 

// console.log(gameName.__proto__);

// console.log(gameName.length);

// console.log(gameName.toLowerCase());

// console.log(gameName.charAt(1));

console.log(gameName.indexOf('T'));


const newString =gameName.substring(0,3)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "    Kiran    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://kiran.com/kiran%20Jadhav"

console.log(url.replace('%20','-'))

console.log(url.includes('kiran'));

console.log(gameName.split('-'));