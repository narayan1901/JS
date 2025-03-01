// // arithmetic operator

// let a = 5;
// let b = 4;
// console.log("a=",a ,"b=",b);
// console.log("a+b=", a + b)
// console.log("a-b=", a - b)
// console.log("a*b=", a * b)
// console.log("a/b=", a / b)
// console.log("a%b=", a % b)
// console.log("a**b=", a ** b)

// // unary operator
// let a = 5;
// let b = 4;
// a++;
// b--;
// console.log("a", a)
// console.log("b", b)

// // assignment operator
// let a = 5;
// let b = 4;
// a += 2;
// a -= 2;
// a *= 2;
// a /= 2;
// a **= 2;
// a %= 2;
// console.log(a)

// comparision operator{==, !=, ===, !==, >, >=, <, <=}
// let a = 5;
// let b = "5";
// console.log("5==5",a==b);
// console.log("5!=5",a!=b);

// let a = 5;
// let b = "5";
// console.log("5===5",a===b);

// let a = 5;
// let b = 4;
// console.log("5!==4",a!==b);

// // logical operator{ &&, ||, !}
// let a = 5;
// let b = 8;

// let cond1 = a < b;
// let cond2 = a != b;
// console.log(cond1 && cond2);
// console.log(cond1 || cond2);
// console.log("5>8", !(a > b));


// // conditional statements
// let age = 21;
// if(age >= 18){
//     console.log("able to vote");
// }
//     else{
//         console.log("cant vote");
//     }

// let num= 23;
// if(num%2 == 0){
//     console.log("even num");
// }else{
//     console.log("odd num");
// }

// let age = 14;
// if(age < 18){
//     console.log("junior");
// }else if(age > 60){
//     console.log("senior");
// }else {
//     console.log("middle");
// }


// // ternary operatot
// let age = 15;
// let result = age >= 18 ? "adult" : "not adult";
// console.log(result);

// // prompt
// let name = prompt("hello Anju");
// console.log(name);


// // Qs1. Get user to input a number using prompt(“Enter a number: ”). Check if the number is a multiple of 5 or not.
// let num = prompt("enter a number:");
// if(num%5 == 0){
//     console.log("multiple of 5");
// }else{
//     console.log("not a multiple of 5")
// }


// Qs2. Write a code which can give grades to students according to their scores:
let marks = prompt("enter student marks:")
if(marks >= 90 && marks <= 100 ){
    grade ="A";
}else if(marks >= 70 && marks <=89){
    grade ="B";
}else if(marks >= 60 && marks <=69){
    grade ="C";
}else if(marks >= 50 && marks <=59){
    grade ="D";
}else{
    grade ="E";
}
console.log("GRADE:", grade);