//Arrays are objects

const myArr = [0 , 1, 2, 6, 4, 5]
const myHeros = ["Ironman", "thor"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1]);

//array methods 
// myArr.push(6)  //push adds that value in the array 
// myArr.push(7)
// myArr.pop()  //pop automatically removes last value 

// myArr.unshift(9)  //unshift inserts value at the first of array
// myArr.shift()  //shift removes first value at the first of array


// console.log(myArr.includes(5));
// console.log(myArr.indexOf(6));

// const newArr = myArr.join() //join adds all elements into a string 

// console.log(myArr);
// console.log(newArr);


// **********************Slice, splice*******************************
console.log("A", myArr);
const myn1 = myArr.slice(1, 3) //slice includes the 
console.log(myn1);

console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C", myArr);
console.log(myn2);



