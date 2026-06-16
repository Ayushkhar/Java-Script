const clock = document.getElementById('clock')
console.log(clock)
const body = document.querySelector('body')

setInterval(()=>{
    const date = new Date();
    const time = date.toLocaleTimeString()

    clock.innerHTML = time 
    console.log(time)
},1000)