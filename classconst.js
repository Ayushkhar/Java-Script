class user{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPass(){
        return `${this.password}abc123`
    }
    changeusername(){
        return `${this.username.toLowerCase()}`
    }
}

const us = new user("AJyush","kharesurya","5556");
console.log(us.encryptPass())

console.log(us.changeusername())