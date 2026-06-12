// IIFE is immediately invoked function expressions(iife)
// it is used to immmediatey run and also here we protect the fuunction from 
// global pollution 

(function name(){
    console.log(`Suryansh is genius`)
})();

// arrow function 

(()=>{
    console.log("Ayush is genius")
})();

// if parameters has to be given 
(()=>{
    console.log(`${name} is wowwww`);
})();

// ((name)=>{
//     console.log(`${name} is wowwww`);
// }
// ((name)=>{
//     console.log(`${name} is ayush`)
// }))('ayush');