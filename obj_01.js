const userjs ={
    name:"Suryansh khare",
    email:"kharesuryanshkhare@gmail.com",
    location:"varanasi",
    isloggedin:true,
    isgenius:true
}
console.log(userjs["email"])
console.log(userjs.email);

// how to use symbol
const mysym = Symbol("key1");
const test1 = {
    [mysym]:"my key 1",
    email:"lolo@gmail.com"
}
console.log(test1[mysym]);
// how to freeze the entries 
Object.freeze(test1);
test1["email"] ="hello@gmail.com";
console.log(test1.email);
