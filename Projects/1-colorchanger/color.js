const button = document.querySelectorAll('.button')
// console.log(button);
const body =document.querySelector('body');
button.forEach(function(but){
    console.log(but);
    but.addEventListener('click',(e) => {
        if(e.target.id == "grey"){
            document.body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id == "white")
        {
            document.body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id == "blue")
        {
            document.body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id == "yellow")
        {
            document.body.style.backgroundColor = e.target.id;
        }
        
    })
})