// const coding=["js","ruby","java","python","cpp"]

// const values=coding.forEach((item)=>{
//     console.log(item)
//     // return item;
// })
// console.log(values);

const mynum =[1,2,3,4,5,6,7,8,9,10];
// let nums = mynum.filter((num)=>num>4)
// console.log(nums)

// let nums1=mynum.filter((num)=>{
//     num>4
//     // here scope starts so no return or empty return 
       // thus use return if scope is applied 

// })
// console.log(nums1)

const mynum10 = mynum.filter((num)=>{
    let i=0;
    while(i<mynum.length)
    {
        mynum[i]=mynum[i]+10;
        i++;
    }
    return mynum;
})
console.log(mynum10)


const mynum1 =[1,2,3,4,5,6,7,8,9,10];

const mapnum=mynum1.map((num)=>(num+10));
console.log(mapnum);

