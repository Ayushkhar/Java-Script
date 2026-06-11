let mydate=new Date()
console.log(mydate)
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toTimeString())

console.log(typeof mydate)

let newdate=new Date(2026,0,8);
console.log(newdate.toDateString())
let newdate2=new Date(2026-1-8);
console.log(newdate2.toDateString())

let mytimestamp = Date.now();
console.log(mytimestamp);
console.log(Math.floor(Date.now()/1000));

newdate.toLocaleString('default', {
    weekday: "long"
})