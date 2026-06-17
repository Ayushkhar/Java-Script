// const promiseOne = new Promise(function(resolve, reject){
//     // Async calls like db calls, network etc
//     setTimeout(function(){
//         console.log('Async task is completed')
//         resolve()
//     },1000)
// })
// promiseOne.then(function(){
//     console.log("promise consumed");
// })

// new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         console.log("This is async task 2")
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("wow....Async 2 is resolved")
// })

// const promisethree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username:"Ayush", email:"kharesuryanshkhare@gmail.com"})
//     },1000)
// })

// promisethree.then(function(user){
//     console.log(user )
// })

const promisefour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (error != true) {
      resolve({ username: "Ayush khare", Password: "1234" });
    } else {
      reject("Error oh my god");
    }
  }, 1000);
});
promisefour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  }).finally(()=>{
    console.log("The promise is either resolved or rejected");
  })

const promisefive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(error != true)
        {
            resolve({username: "Ayush khare", password: "123xc"});

        }else{
            reject('Error: Oh my god');
        }

    },1000)
});
// we can hanle promises by .then as well as the async as well both are valid

async function consumepromisefive(){

    const response = await promisefive;
    console.log(response);
}
consumepromisefive()
//  

const promisesix = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(error != true)
        {
            resolve({username: "Ayush khare", password: "123xc"});

        }else{
            reject('Error: Oh my god');
        }
        
    },1000)
})

async function consumepromisesix(){
    try
    {
        const response = await promisesix;
        console.log(response);
    }
    catch(error)
    {
        console.log(error);

    }

}
consumepromisesix()