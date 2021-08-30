"use strict";
const num = 123;
let sum = 0;
const ones=num%10; //מבודד את ספרת האחדות
const tens=(num%100-ones)/10;// מבודד את ספרט העשרות
const hundreds=(num-ones-(tens*10))/100; //מבודד את ספרת המאות
sum= ones+tens+hundreds;
console.log(sum);
