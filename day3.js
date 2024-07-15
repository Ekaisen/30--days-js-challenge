// Activity 1
// Task 1 

const num1 = 12;
if(num1>0){
    console.log("This number is positive.");
}
else if(num1<0){
    console.log("This number is negative");
}
else{
    console.log("This is zero")
}

// Task 2 
const age = 18;
if(age => 18){
    console.log("You are eligible for vote.");
}
else{
    console.log("you are not eligible for vote.")
}

// Activity 2
// Task 3 
const num2 = 12;
const num2a = 13;
const num2b = 14;
var largest ;

if(num2>num2a){
    if(num2>num2b){
        largest = num2
    }
    else{
        largest = num2b
    }
}
else{
    if(num2a>num2b){
        largest = num2a
    }
    else{
        largest = num2b
    }
}
console.log(`${largest} is the greatest one.`)


// Activity 3
// Task 4 
var day =4;
switch (day) {
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("tusday")
        break;
    case 3:
        console.log("wednesday")
        break;
    case 4:
        console.log("thursday")
        break;
    case 5:
        console.log("friday")
        break;
    case 6:
        console.log("satarday")
        break;
    case 7:
        console.log("sunday")
        break;

    default:
        console.log("sorry , there are only 7 days in a week.")
        break;
}

// Task 5
var score = 80 ;
switch (true) {
    case score>=90:
        console.log("A");
        break;
    case score>=80:
        console.log("B");
        break;
    case score>=60:
        console.log("C");
        break;
    case score>=40:
        console.log("D");
        break;
    case score<40:
        console.log("F");
        break;

    default:
        console.log("no result");
        break;
}

// Activity 4
// Task 6
const numb = 23;
let oddeven = numb%2==0?"even":"odd"
console.log(`${numb} is a ${oddeven} number`)

// Activity 5
// Task 7
const year = 2024;
if(year%4==0 && year%100!=0|| year%400==0){
    console.log(`${year} is a leap year.`)
}
else{
    console.log(`${year} is not a leap year.`)
}