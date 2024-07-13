// Activity 1 = variable declaration

// Task 1
 var num =  16;
 console.log(num);

// Task 2
let str = "chaiorcode";
console.log(str);

// Activity 2 = constent declaration
// Task 3

const bol = true;
console.log(bol) 

// Activiy 3 = Data type
// Task 4 

// Number 
var num1 = 13;
console.log(num1)
console.log(typeof(num1)) // number

// String 
var name = "Aryan"
console.log(name)
console.log(typeof(name)) // string

// Boolean
const bol1 = true;
console.log(bol1)
console.log(typeof(bol1)) //boolean

// Object
var obj1  =  {
    id: "1",
    name: "Aryan",
}
console.log(obj1)
console.log(typeof(obj1)) // object

// Array
var arr =new Array([1,2,3,4,5,6,7])
console.log(arr)
console.log(typeof(arr)) // object : Array is object in js

// Activity 4 = reassiging value
// Task 5 
let val1 = 30; 
console.log(val1) // 30

val1 = 40;
console.log(val1) // 40

// Activity 5 
// Task 6 
const id = 73;
id = 14;
console.log(id) // TypeError: Assignment to constant variable.
// we can not reassig value in const