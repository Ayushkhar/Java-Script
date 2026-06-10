console.log(2>1)
console.log("2">1)

console.log(null>0);
console.log(null==0);
console.log(null>=0);

// === is a strict check which not only compares the datatype 
// but the value as well 

console.log("2" ===2); //returns false 

const myfun =function(){
    console.log("Hello world")
}
console.log(typeof myfun)


// JavaScript typeof Operator Results

typeof undefined        // "undefined"
typeof null             // "object"
typeof true             // "boolean"
typeof 42               // "number"
typeof "hello"          // "string"
typeof {}               // "object"
typeof function() {}    // "function"
typeof BigInt //->undefined 
// Notes:
// - null is historically returned as "object"
// - functions are a special kind of object in JavaScript



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(primitive)->call by value(copy is passed)
// such as:

// 1. String     → "Hello"
// 2. Number     → 25
// 3. Boolean    → true / false
// 4. Undefined  → undefined
// 5. Null       → null
// 6. Symbol     → Symbol("id")
// 7. BigInt     → 123456789n


// Heap(non-primitive)->call by reference(original reference is passed)
// such as:

// 1. Object
// let obj = {name: "Jerry"};

// 2. Array
// let arr = [1, 2, 3];

// 3. Function
// function greet() {}

let user1 ={
    email: "hoh.gamil.com",
    pass: "hh"
}
console.log(user1.email);

let user2=user1;
user2.email = "kharbanda@gmail.com";
console.log(user2.email)
console.log(user1.email) //this will be changed as well

