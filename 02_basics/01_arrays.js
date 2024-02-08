const myArrays = [0,1,2,3,4,5]

const myHeroes = ["shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4,56,5)

//console.log(myArrays[0]);

//Array method

// myArrays.push(6);
// console.log(myArrays);
// myArr2.push(7);
// console.log(myArrays);
// myArrays.pop();

//myArrays.unshift(9)
//myArrays.shift()


// console.log(myArrays.includes(9));
// console.log(myArrays.indexOf(3));


// const newArr = myArrays.join();
// console.log(myArrays);
// console.log(newArr);

// console.log(myArrays);


//sclice , splice

console.log("A", myArrays);

const myn1 = myArrays.slice(1,3)

console.log(myn1);
console.log("B",myArrays);



const myn2 = myArrays.splice(1,3)
console.log("C", myArrays);
console.log(myn2);