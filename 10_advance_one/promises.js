const promiseOne = new Promise((resolve, reject)=>{
    // Do an async tasks
    // DB calls, cryptography, network
    setTimeout(()=>{
        console.log('Async task is complete');
        resolve();
    },1000)
})

promiseOne.then(()=>{
    console.log("Promise Consumed");
})   // .then is connect with resolve


new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Asymc task 2");
        resolve();
    },1000)
}).then(()=>{
    console.log("Async 2 resolved");
})

const promiseThree = new Promise((resolve, reject)=>{
    setTimeout(()=>{

        resolve({userName: "chai", email: "Chai@example.com"})
    },1000)
})


promiseThree.then((user)=>{
console.log(user);
})


const promiseFour = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({userName: " Kiran ", password:"123"});
        }
        else{
            reject(`Error: Something went wrong`);
        }
    },1000)
})

 promiseFour
 .then((user)=>{
    console.log(user);
    return user.userName;
})
.then((username)=>{
    console.log(username);
})
.catch((error)=>{
    console.log(error);
}).finally(()=> console.log(`the promise is either resolved or rejected`))

const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({userName: " javaScript ", password:"123"});
        }
        else{
            reject(`Error: Js went wrong`);
        }
    },1000)

});

async function consumePromiseFive(){
   try{ const response = await promiseFive;
    console.log(response) }
    catch(error){
    console.log(error)
}
}

consumePromiseFive();


// async function getAllUsers(){
// try{
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     const data = await response.json();
//     console.log(data);
   
// }catch(error){
//     console.log(error);
// } 
// }

// getAllUsers()

fetch("https://api.github.com/users/Kiran-Jadhav200")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(console.log(error)))