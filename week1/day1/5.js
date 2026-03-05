// ======= [ ES6 Concepts] ======

//1. Destructuring in js

let arr = [1,2,3];

//2.type conversion
// convert str data type value ---> num data type

let str = "1,2,3";

let Ans1 = Number(str)
console.log(Ans1, typeof Ans1);

let Ans2 = +str;
//num+str concatination
//num+num addition
//+str 

let num = 123;

let ans1 = String(num);
console.log(ans1, typeof ans1);

let ans2 = "";
ans2+=num;


//Falsy Values in JavaScript

0
false
""
undefined
null
NaN

if(101){
    console.log(1);
}else{
    console.log(2)
}

//END OPERATOR 
//end operator always search for falsy value & return it and if it isn't found any falsy value then it gives last value as the result.
//OR OPERATOR
//or operator always search for truthy value & return it and if it cant find any truthy value then it gives last value as a result.
