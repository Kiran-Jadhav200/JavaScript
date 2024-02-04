//"use Strict"; // treat all JS code as newer version

// alert(3+5); // we are using node.js not browser

console.log(3
    +4) // code readability  should be high

console.log("Kiran")

let name ="kiran"
let age = 3;
let isLoggedIn = false;
let state;


// number => 2 to power 53
//bitInt 
//string => ""
//boolean => true or false
// null => standalone value
//undefined =>
// symbol=> unique



// Object

console.log(typeof null); //object
console.log(typeof undefined); // undefined





//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) , heap(Non-Primitive)

let myYoutubeName = "KiranJadhavdotcom";
let anotherName = myYoutubeName
console.log(anotherName);
anotherName ="Chai or code"
console.log(anotherName);
console.log(myYoutubeName);


let user ={
    email: "user@google.com",
    upi:"user@ybl"
}

let userTwo = user;
userTwo.email = "jadhav@gmai.com"

console.log(user.email);
console.log(userTwo.email);
