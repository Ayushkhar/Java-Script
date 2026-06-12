// array
const myarr=[0,1,2,3,4,5];
const myh=["ironman","raone"];

const myarr1=new Array(1,2,3,4);
console.log(myarr1[3]);

myarr1.push(9);
myarr1.unshift(9);
myarr1.shift();
console.log(myarr1)

console.log(myarr1.includes(8))

// conversion of string
const newarr=myarr1.join();
console.log(myarr1)
console.log(typeof newarr)

const testar=[1,2,3,4,5]
// In slice original array is not manipulated 
console.log(testar.slice(1,3));
console.log(testar);
// In splice original array also gets manipulated
// and last number in the range is also included 
console.log(testar.splice(1,3));
console.log(testar);


