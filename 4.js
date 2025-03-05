// let marks = [78, 89, 76, 99, 84, 88];
// console.log(marks);
// console.log(marks.length);

// let Heroes = ["Hanu-Man", "Iron-man", "Spider-Man"];
// console.log(Heroes);
// console.log(Heroes.length);


//for loop in array
// let Heroes = ["Hanu-Man", "Iron-man", "Spider-Man","Ant-man"];
// for(let i=0; i<Heroes.length; i++){
//     console.log(Heroes[i]);
// }


//for of 
// let Heroes = ["Hanu-Man", "Iron-man", "Spider-Man","Ant-man"];
// for(let hero of Heroes){
//     console.log(hero);
// }

// let cities = ["Indore", "Dewas", "Harda",]
// for(let city of cities){
//     console.log(city.toUpperCase());
// }


// // For a given array with marks of students -> [85, 97, 44, 37, 76, 60] 
// // Find the average marks of the entire class.

// let m = [85, 97, 44, 37, 76, 60]
// let sum = 0;
// for(let val of m){
//     sum += val;
// }
// let avg= sum/m.length;
// console.log(`avg marks of the class is = ${avg}`);


// For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
// All items have an offer of 10% OFF on them. Change the array to store final price after
// applying offer.

// let items = [250, 645, 300, 900, 50]
// // let i = 0;
// // for(let val of items){
// //   console.log(`value at index & ${i} = ${val}`);
// //   let offer = val/10;
// //   items[i] = items[i] - offer;
// //   console.log(`value after offer = ${items[i]}`);
// //   i++;
// // }


// for(let i=0; i<items.length; i++){
//   let offer = items[i]/10;
//   items[i] -= offer;
// }
// console.log(items)



// // push() insert at the end

// let Fooditems = ["apple", "orange", "potato", "tomato"]
// Fooditems.push("mango");
// console.log(Fooditems)


// // unshift() insert at the start
// let marvelHeroes = ["iron-man", "spider-man"]
// marvelHeroes.unshift("ant-man");
// console.log(marvelHeroes);


// // pop() delet from end
// let Fooditems = ["apple", "orange", "potato", "tomato"]
// console.log(Fooditems)
// Fooditems.pop();
// console.log(Fooditems)

// // shift() delet from start
// let marvelHeroes = ["iron-man", "spider-man"]
// marvelHeroes.shift();
// console.log(marvelHeroes);

// // toString()  convert array to sting
// let Fooditems = ["apple", "orange", "potato", "tomato"]
// console.log(Fooditems);
// console.log(Fooditems.toString());

// let m = [85, 97, 44, 37, 76, 60]
// console.log(m);
// console.log(m.toString());

// // concat() combine two or more array 
// let marvelHeroes = ["iron-man", "spider-man"]
// let dcHeroes = ["super-man", "flash"]
// let heroes = marvelHeroes.concat(dcHeroes);
// console.log(heroes);



// // slice() returns a piece of array
// // slice( startIdx, endIdx )
// let marvelHeroes = ["iron-man", "spider-man", "ant-man", "falcon", "captain america"]
// console.log(marvelHeroes);
// console.log(marvelHeroes.slice(2,4));


// // splice change original array (add, remove, replace)
// let marvelHeroes = ["iron-man", "spider-man", "ant-man", "falcon", "captain america"]
// console.log(marvelHeroes);
// // marvelHeroes.splice(1,2,"anju");

// // add element with splice
// marvelHeroes.splice(0,0,"anju");

// // delete element in splice
// marvelHeroes.splice(2,1);

// // replace element with splice
// marvelHeroes.splice(1,1,"anju")



// Qs. Create an array to store companies -> “Bloomberg”, “Microsoft”, “Uber”, “Google”, “IBM”, “Netflix”
// a. Remove the first company from the array
// b. Remove Uber & Add Ola in its place
// c. Add Amazon at the end

let companies = ["bloomberg", "microsoft", "uber", "google", "ibm", "netflix"]
// companies.shift();
// companies.splice(2,1,"ola");
companies.push("amazon");
console.log(companies);