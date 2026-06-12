const user={
    username:"surya mara jayega",
    price:999,
    welcomemessage:function()
    {
        console.log(`Helo ${this.username} , welcome to the hell`);
        console.log(this);
    }
}
// user.welcomemessage();
// user.username="paadey";
// user.welcomemessage();

// this function only works with the object only not in funxtion
// as shown belo

function behtareen(){
    let username="Suryansh";
    console.log(this.username);
}
// no need to return anything when using arrow function 
const addtwo = (num1,num2)=>(num1+num2);

console.log(addtwo(2,3))