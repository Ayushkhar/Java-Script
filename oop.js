const user = {
    username : "Ayush",
    logincount : 8,
    signed_out : true,

    getuserdet : function(){
        // console.log(`Username : ${this.username}`);
        console.log(this)
    }
}


// console.log(user.username);
console.log(user.getuserdet());