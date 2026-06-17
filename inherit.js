// const user = {
//     name : "Ayush",
//     email : "kharesuryanshkhare@gmail.com"
// }
// const teacher = {
//     makevid : true
// }

// const teachingsupp = {
//     isavailaible : true 
// }

// const tasupport = {
//     makeassn : 'JS assignment',
//     fulltime : true,
//     __proto__ : teachingsupp 
// }
// teacher.__proto__=user
// // This is the modern syntax
// Object.setPrototypeOf(teachingsupp, teacher)



// let anotheruser = "Suryansh Khare      ";

// String.prototype.truelength = function(){
//     console.log(`${this}`);
//     // console.log(`${this.name}`);
//     console.log(`True length is: ${this.trim().length}`);
// }

// anotheruser.truelength();
// "Suryansh khare".truelength();
// "hellomickeymouse".truelength();



class user {
    constructor(username){
        this.username = username;
    }
    logme(){
        console.log(`username is ${this.username}`)
    }
}
class teacher extends user { 
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }
    addcourse(){
        console.log(`A new course  was added by: ${this.username}`)
    }
}

const hoho = new teacher("yeeah", "jj@gmail.com", "122");

hoho.addcourse()
