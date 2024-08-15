//dates
let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);   // date is object in js

// let myCreatedDate = new Date(2023, 1, 23, 5, 3)
let myCreatedDate = new Date("01-14-2024")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp= Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate.getMonth() + 1);  //count starts from 0 so output is 7 i.e august
// console.log(newDate.getDay());  

// `${newDate.getDay()} and the time is ${newDate.getTime()}` 
// console.log(`${newDate.getDay()} and the time is ${newDate.getTime()}` 
// );

console.log(newDate.toLocaleString('default', {
    weekday: "short",
}));





