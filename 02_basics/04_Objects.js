//const tinderUser = new Object() // this is singleton object
const tinderUser = {}  // non singleton object 

tinderUser.id = "123abc"
tinderUser.name ="Sammy"
tinderUser.isLoggedIn =false;

//console.log(tinderUser);

const regularUser ={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstName: "Kiran",
            lastName: "Jadhav"
        }
    }
}

//console.log(regularUser.fullname?.userfullname.firstName);

const obj1 ={1:"a", 2:"n"}
const obj2 ={3:"a", 4:"n"}
const obj4 ={5:"a", 6:"n"}

//const object3 = Object.assign({},obj1,obj2,obj4)
const object3 = {...obj1 , ...obj2}

console.log(object3);


const users = [
    {
        id:1,
        email:"h@email.com"
    },
    {
        id:2,
        email:"h@email.com"
    },
    {
        id:3,
        email:"h@email.com"
    },
    {
        id:4,
        email:"h@email.com"
    }
    
]
console.log(tinderUser);
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));