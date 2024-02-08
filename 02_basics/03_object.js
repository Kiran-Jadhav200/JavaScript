//singleton
//Object.create


// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "kiran",
    "Full Name": "Kiran Jadhav",
    [mySym]:"mykey1",
    age: 18,
    location: "Jaipur",
    email:"Kiran@google.com",
    isLoggedIn: false,
    lastLoigininDay:["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["Full Name"]);
// console.log(JsUser[mySym]);

JsUser.email = "Kiran@chatgpt.com"
//Object.freeze(JsUser);
JsUser.email = "Kiran@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingTWO = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTWO());
