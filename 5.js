// function myFunction(){
//     console.log("hello");
//     console.log("hii");
// }
// myFunction();

// function fn(parameter){
//     console.log(parameter);
// }
// fn("argument");

// function sum(x,y){
//     s=x+y;
//     // console.log(s);
//     return s;
// }
// let val = sum(5,4);
// console.log(val);


// // arrow function
// const sum = (a,b)=>{
//     return a+b;
// }
// let val1 = sum(9,6);
// console.log(val1);


// // Qs. Create a function using the “function” keyword that takes a String as an argument &
// // returns the number of vowels in the string.

// function count_vowels(str){
//     let count = 0;
//     for (const char of str){
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//             count++;
//         }
//     }
//     console.log(count);
// }


// Create an arrow function to perform the same task.
const count_vowels = (str) => {
    let count = 0;
    for (const char of str){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count++;
        }
    }
    console.log(count);
}



// // arr.forEach
// arr.forEach( callBackFunction )
// CallbackFunction : Here, it is a function to execute for each element in the array

// *A callback is a function passed as an argument to another function.

// let arr = [21, 19, 11, 44]
// arr.forEach((val)=>{
// console.log(val);
// });

// let arr = ["Anju", "Naru", "Anjali", "Narayan"]
// arr.forEach((str, idx, arr)=>{
// console.log(str.toUpperCase(), idx, arr);
// });

// // Qs. For a given array of numbers, print the square of each value using the forEach loop.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// arr.forEach((arr) =>{
//     console.log(arr*arr);
// });


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let calcSquare = (arr)=>{
//     console.log(arr*arr);
// }
// arr.forEach(calcSquare);


// // map
// // Creates a new array with the results of some operation. The value its callback returns are
// // used to form new array
// // arr.map( callbackFnx( value, index, array ) )
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// nums.map((val) =>{
//     console.log(val);
// });

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let newarr = nums.map((val) =>{
//     return val;
// });
// console.log(newarr);


// // Creates a new array of elements that give true for a condition/filter.
// // let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // let evennum = nums.filter((val) => {
// //     return val % 2 === 0;
// // });
// // console.log(evennum);

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let oddnum = nums.filter((val) => {
//     return val % 2 !== 0;
// });
// console.log(oddnum);

// // reduce
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const output = nums.reduce((res, curr)=>{
//     return res + curr;
// });
// console.log(output);


// let nums = [1, 2, 32, 4, 52, 6, 7, 8, 9, 10]
// const output = nums.reduce((res, curr)=>{
//     return res > curr ? res : curr; //greater value from array
// });
// console.log(output);


// // Qs. We are given array of marks of students. Filter our of the marks of students that scored 90+.
// let stud = [78, 45, 67, 54, 89, 98, 95, 55]
// const num = stud.filter((marks)=>{
//     return marks>=90;
// });
// console.log(num);



// // Take a number n as input from user. Create an array of numbers from 1 to n.
// // Use the reduce method to calculate sum of all numbers in the array.
// let n = prompt("enter the numbers:")
// let num = [];
// for(let i=1; i<=n; i++){
//     num[i-1] = i;
// }
// console.log(num);
// const sum = num.reduce((res, curr)=>{
//     return res + curr;
// });
// console.log(sum);

// // Use the reduce method to calculate product of all numbers in the array.
let n = prompt("enter the numbers:")
let num = [];
for(let i=1; i<=n; i++){
    num[i-1] = i;
}
console.log(num);
const sum = num.reduce((res, curr)=>{
    return res + curr;
});
console.log("sum=", sum);
const factorial= num.reduce((res, curr)=>{
    return res * curr;
});
console.log("factorial= ", factorial);