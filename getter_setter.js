class user {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    get password(){
        return this._password.toUpperCase();
    }
    set password(val){
        this._password = val;
    }
}
const ayush = new user("kharesuryanshkhare@gmal.com", "abc");
console.log(ayush.password)