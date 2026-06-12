// const tinderuser =new Object(); //This is a singleton object 
// const tinderuser ={} //This is a non singleton object
// console.log(typeof tinderuser);

const tinderuser={}
tinderuser.name="lagmaster";
tinderuser.isloggedin =true;
// console.log(tinderuser);
const regularuser ={
    username:{
        firstuser:"Suryansh",
        lastuser:"Khare"
    },
    email:"kharesuryanshkhare@gmail.com"
}
console.log(regularuser.email)

// Assigning operator
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"} 
const obj3={5:"a",6:"b"} 
const obj_main=Object.assign({},obj1,obj2,obj3)
console.log(obj_main);


// Destructuring 
const course ={
    coursename:"js is the future",
    price:"999",
    coursefoll:"Suryansh"
}
const {coursefoll:fol}=course;
console.log(fol)
