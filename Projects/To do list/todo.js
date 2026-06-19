const inpbox = document.getElementById("input-box");
const cont = document.getElementById("list-container")

function addtask(){
    if(inpbox.value === "")
    {
        alert("Please enter the correct details");
    }
    else
    {
        const li = document.createElement("li");
        li.innerHTML = inpbox.value;
        cont.appendChild(li);
        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        li.addEventListener('click',function(){
            li.classList.toggle("checked");

        })
        span.addEventListener('click',function(e){
            e.stopPropagation();
            li.remove();
        })
    }
    inpbox.value = ""
}